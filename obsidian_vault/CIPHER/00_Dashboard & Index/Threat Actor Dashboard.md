---
banner: 99_Attachments/CIPHER Obsidian Banner.png
---
### 🕵️Threat Actor Master Index
```dataview
TABLE
  name AS "Name",
  type AS "Type",
  country_of_origin AS "Country",
  primary_motive AS "Primary Motive",
  preferred_targets AS "Preferred Targets",
  risk_level AS "Risk",
  attribution_confidence AS "Attribution Conf.",
  analytic_confidence AS "Analytic Conf.",
  updated AS "Last Updated"
FROM "03_Threat_Actors"
WHERE entity_type = "threat_actor"
SORT risk_level, updated DESC

```
### High Risk Threat Actors
```dataview
TABLE
  name AS "Name",
  type AS "Type",
  country_of_origin AS "Country",
  primary_motive AS "Primary Motive",
  preferred_targets AS "Preferred Targets",
  risk_level AS "Risk",
  first_seen AS "First Seen",
  last_seen AS "Last Seen",
  updated AS "Last Updated"
FROM "03_Threat_Actors"
WHERE entity_type = "threat_actor"
AND risk_level != "Low"
SORT risk_level DESC, last_seen DESC
```
### Actors by Country & Type
```dataviewjs
const actors = dv.pages('"03_Threat_Actors"')
  .where(p => p.entity_type === "threat_actor");

const grouped = {};

for (const a of actors) {
  const country = a.country_of_origin || "Unknown";
  const types = Array.isArray(a.type) ? a.type : (a.type ? [a.type] : ["Unspecified"]);
  if (!grouped[country]) grouped[country] = {};
  for (const t of types) {
    grouped[country][t] = (grouped[country][t] || 0) + 1;
  }
}

dv.table(
  ["Country", "Nation-state", "Criminal", "Hacktivist", "Other"],
  Object.entries(grouped).map(([country, bucket]) => [
    country,
    bucket["Nation-state"] || 0,
    bucket["Criminal"] || 0,
    bucket["Hacktivist"] || 0,
    Object.entries(bucket)
      .filter(([k]) => !["Nation-state","Criminal","Hacktivist"].includes(k))
      .reduce((sum, [,v]) => sum + v, 0)
  ])
);

```

### Data Hygiene - Incomplete Threat Actor Records
```dataview
TABLE
  name AS "Name",
  type AS "Type",
  country_of_origin AS "Country",
  risk_level AS "Risk",
  first_seen AS "First Seen",
  last_seen AS "Last Seen",
  attribution_confidence AS "Attribution Conf.",
  analytic_confidence AS "Analytic Conf.",
  updated AS "Last Updated"
FROM "03_Threat_Actors"
WHERE entity_type = "threat_actor"
AND (
  !name
  OR !type
  OR !country_of_origin
  OR !risk_level
  OR !first_seen
  OR !last_seen
  OR !attribution_confidence
  OR !analytic_confidence
)
SORT updated DESC
```

### Threat Actors <--> Campaign Relationships (per actor)
```dataviewjs
// Get actors and campaigns
const actors = dv.pages('"03_Threat_Actors"')
  .where(p => p.entity_type === "threat_actor");

const campaigns = dv.pages('"04_Campaigns"')
  .where(p => p.entity_type === "campaign");

// Helper: normalize associated_threat_actors for each campaign to strings
function getAssocActorNames(c) {
  if (!c.associated_threat_actors) return [];
  // If they are links: c.associated_threat_actors = [ [[Actor A]], [[Actor B]] ]
  // Dataview will usually expose those as link objects or strings
  return (Array.isArray(c.associated_threat_actors)
    ? c.associated_threat_actors
    : [c.associated_threat_actors]
  ).map(x => {
    if (x?.path) return x.path;           // link object path
    if (x?.markdown) return x.markdown;   // link markdown if available
    return String(x);                     // fallback: plain string
  });
}

// Build rows
const rows = actors.map(a => {
  const actorName = a.name ?? a.file.name;
  const actorPath = a.file.path;

  // Campaigns that reference this actor either:
  // - via wikilink path
  // - or via string containing the actor's name
  const relatedCampaigns = campaigns.filter(c => {
    const assoc = getAssocActorNames(c);
    return assoc.some(val =>
      val === actorPath || val === actorName || val.includes(actorName)
    );
  });

  return [
    a.file.link,
    a.risk_level || "Unspecified",
    relatedCampaigns.length,
    relatedCampaigns.map(c => c.file.link).join(", ")
  ];
});

dv.header(3, "🔗 Threat Actors and Their Campaigns");
dv.table(
  ["Threat Actor", "Risk", "# Campaigns", "Campaigns"],
  rows
);
```

### Malware Overview Metrics
```dataviewjs
const malware = dv.pages('"05_Malware & Tools"')
  .where(p => p.entity_type === "malware");

const total = malware.length;

const byFamily = {};
const byType = {};
const byRisk = {};

for (const m of malware) {
  const fam = m.malware_family || "Unspecified";
  byFamily[fam] = (byFamily[fam] || 0) + 1;

  const type = m.malware_type || "Unspecified";
  byType[type] = (byType[type] || 0) + 1;

  const risk = m.risk_level || "Unspecified";
  byRisk[risk] = (byRisk[risk] || 0) + 1;
}

dv.header(3, "📊 High-level Stats");
dv.list([
  `Total malware/tools: **${total}**`,
  "By family:",
  ...Object.entries(byFamily)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([k, v]) => `- **${k}**: ${v}`),
  "By type:",
  ...Object.entries(byType)
    .sort((a, b) => b[1] - a[1])
    .map(([k, v]) => `- **${k}**: ${v}`),
  "By risk level:",
  ...Object.entries(byRisk).map(([k, v]) => `- **${k}**: ${v}`)
]);
```

### Threat Actors <--> Malware Relationships
```dataviewjs
const actors = dv.pages('"03_Threat_Actors"')
  .where(p => p.entity_type === "threat_actor");
const malware2 = dv.pages('"05_Malware & Tools"')
  .where(p => p.entity_type === "malware");

// normalize associated_threat_actors from malware
function getAssocActorKeys(m) {
  if (!m.associated_threat_actors) return [];
  const raw = Array.isArray(m.associated_threat_actors)
    ? m.associated_threat_actors
    : [m.associated_threat_actors];

  return raw.map(x => {
    if (x?.path) return x.path;         // link path
    if (x?.markdown) return x.markdown; // link markdown
    return String(x);                   // fallback string
  });
}

const rows = actors.map(a => {
  const actorName = a.name ?? a.file.name;
  const actorPath = a.file.path;

  const relatedMalware = malware2.filter(m => {
    const assoc = getAssocActorKeys(m);
    return assoc.some(val =>
      val === actorPath || val === actorName || val.includes(actorName)
    );
  });

  return [
    a.file.link,
    a.risk_level || "Unspecified",
    relatedMalware.length,
    relatedMalware.map(m => m.file.link).join(", ")
  ];
});

dv.header(3, "🔗 Threat Actors and Their Malware/Tools");
dv.table(
  ["Threat Actor", "Actor Risk", "# Malware/Tools", "Malware / Tools"],
  rows
);

```

### Technique Master Index
```dataview
TABLE
  technique_id AS "ID",
  technique_name AS "Technique",
  tactic AS "Tactic(s)",
  platforms AS "Platforms",
  detection_priority AS "Priority",
  detection_maturity AS "Detection Maturity",
  threat_score AS "Threat Score",
  deprecated AS "Deprecated?",
  updated AS "Last Updated"
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type = "mitre_technique"
SORT threat_score DESC, detection_priority DESC, detection_maturity DESC, technique_id ASC 
```

### Techniques By Tactics
```dataviewjs
const techniques = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
  .where(p => p.entity_type === "mitre_technique");

const byTactic = {};

for (const t of techniques) {
  const tactics = Array.isArray(t.tactic) ? t.tactic : (t.tactic ? [t.tactic] : ["Unspecified"]);
  for (const tac of tactics) {
    if (!byTactic[tac]) byTactic[tac] = [];
    byTactic[tac].push(t);
  }
}

dv.header(2, "📚 Techniques Grouped by Tactic");
dv.table(
  ["Tactic", "# Techniques", "Techniques"],
  Object.entries(byTactic)
    .sort((a,b) => a[0].localeCompare(b[0]))
    .map(([tactic, list]) => [
      tactic,
      list.length,
      list.map(x => x.file.link).join(", ")
    ])
);

```

### Technique --> Threat Actor Mapping
```dataviewjs
const techniquesTA = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
  .where(p => p.entity_type === "mitre_technique");

dv.header(2, "🕵️ Technique → Threat Actors Mapping");

dv.table(
  ["Technique", "ID", "Threat Actors", "Threat Score", "Detection Maturity"],
  techniquesTA
    .map(t => [
      t.file.link,
      t.technique_id || "",
      Array.isArray(t.associated_threat_actors) ? t.associated_threat_actors.join(", ") : (t.associated_threat_actors || ""),
      t.threat_score ?? "",
      t.detection_maturity ?? ""
    ])
    .sort((a,b) => (Number(b[3] || 0) - Number(a[3] || 0)) || a[0].toString().localeCompare(b[0].toString()))
);

```
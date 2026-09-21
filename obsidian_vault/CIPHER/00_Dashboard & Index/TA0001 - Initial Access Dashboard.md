---
title: TA0001 – Initial Access Dashboard
tactic_id: TA0001
tactic_name: Initial Access
tags:
  - cti
  - mitre
  - tactic
  - dashboard
  - initial-access
created: 2025-11-30
updated: 2025-11-30
banner: 99_Attachments/CIPHER Obsidian Banner.png
---

# 🧩 TA0001 – Initial Access Dashboard

---

## 1. Initial Access Techniques
```dataview
TABLE technique_id AS "ID", technique_name AS "Technique", platforms AS "Platforms",
detection_priority AS "Priority", detection_maturity AS "Detection Maturity",
threat_score AS "Threat Score", associated_threat_actors AS "Threat Actors",
associated_malware AS "Malware / Tools", updated AS "Last Updated"
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type="mitre_technique" AND contains(tactic, this.tactic_name)
SORT threat_score DESC, technique_id ASC
```

## 2. Detection Gaps (Initial Access)
```dataview
TABLE technique_id AS "ID", technique_name AS "Technique",
detection_priority AS "Priority", detection_maturity AS "Detection Maturity",
threat_score AS "Threat Score", datasources AS "Data Sources"
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type="mitre_technique"
AND contains(tactic, this.tactic_name)
AND (lower(detection_maturity)="none" OR lower(detection_maturity)="minimal")
SORT detection_priority DESC, threat_score DESC

```

## 3. Actors Using Initial Access Techniques
```dataviewjs
const tacticName = dv.current().tactic_name;
const techniques = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
.where(p => p.entity_type==="mitre_technique" && (p.tactic||[]).includes(tacticName));

const actorCounts = {};
for (const t of techniques) {
  const actors = Array.isArray(t.associated_threat_actors) ? t.associated_threat_actors :
    (t.associated_threat_actors ? [t.associated_threat_actors] : []);
  for (const a of actors) {
    const key = a.toString();
    if (!actorCounts[key]) actorCounts[key] = {ref: a, count: 0, techs: []};
    actorCounts[key].count++;
    actorCounts[key].techs.push(t.file.link);
  }
}
dv.table(["Threat Actor", "# Techniques", "Techniques"],
  Object.values(actorCounts)
    .sort((a,b)=>b.count-a.count)
    .map(x => [x.ref, x.count, x.techs.join(", ")]));

```

## 4. Malware / Tools in Initial Access
```dataviewjs
const tactic = dv.current().tactic_name;
const tList = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
 .where(p => (p.tactic||[]).includes(tactic));

const malwareCounts = {};
for (const t of tList) {
  const items = Array.isArray(t.associated_malware) ? t.associated_malware :
    (t.associated_malware ? [t.associated_malware] : []);
  for (const m of items) {
    const key = m.toString();
    if (!malwareCounts[key]) malwareCounts[key] = {ref: m, count: 0, techs: []};
    malwareCounts[key].count++;
    malwareCounts[key].techs.push(t.file.link);
  }
}
dv.table(["Malware / Tool","# Techniques","Techniques"],
  Object.values(malwareCounts)
    .sort((a,b)=>b.count-a.count)
    .map(x=>[x.ref,x.count,x.techs.join(", ")]));

```

## 5. Campaigns Using Initial Access Techniques
```dataviewjs
const tList2 = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
  .where(p => (p.tactic||[]).includes(dv.current().tactic_name));

const campCounts = {};
for (const t of tList2) {
  const camps = Array.isArray(t.associated_campaigns) ? t.associated_campaigns :
    (t.associated_campaigns ? [t.associated_campaigns] : []);
  for (const c of camps) {
    const key = c.toString();
    if (!campCounts[key]) campCounts[key]={ref:c,count:0,techs:[]};
    campCounts[key].count++;
    campCounts[key].techs.push(t.file.link);
  }
}
dv.table(["Campaign","# Techniques","Techniques"],
  Object.values(campCounts)
    .sort((a,b)=>b.count-a.count)
    .map(x=>[x.ref,x.count,x.techs.join(", ")]));

```

## 6. Incomplete Initial Access Techniques
```dataview
TABLE technique_id AS "ID", technique_name AS "Technique",
detection_maturity AS "Detection Maturity",
detection_priority AS "Priority", threat_score AS "Threat Score",
updated AS "Last Updated"
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type="mitre_technique"
AND contains(tactic,this.tactic_name)
AND (!technique_name OR !detection_maturity OR !detection_priority OR !threat_score)
SORT updated DESC

```


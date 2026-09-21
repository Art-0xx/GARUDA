---
title: TA0002 – Execution Dashboard
tactic_id: TA0002
tactic_name: Execution
tags:
  - cti
  - mitre
  - tactic
  - dashboard
  - execution
created: 2025-11-30
updated: 2025-11-30
banner: 99_Attachments/CIPHER Obsidian Banner.png
---

# 🧩 TA0002 – Execution Dashboard

## 1. Execution Techniques
```dataview
TABLE technique_id AS "ID", technique_name AS "Technique", platforms AS "Platforms",
detection_priority AS "Priority", detection_maturity AS "Detection Maturity",
threat_score AS "Threat Score", associated_threat_actors AS "Threat Actors",
associated_malware AS "Malware / Tools", updated AS "Last Updated"
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type="mitre_technique" AND contains(tactic,this.tactic_name)
SORT threat_score DESC, technique_id ASC
```

## 2. Detection Gaps - Execution
```dataview
TABLE technique_id, technique_name, detection_priority, detection_maturity,
threat_score, datasources
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type="mitre_technique"
AND contains(tactic,this.tactic_name)
AND (lower(detection_maturity)="none" OR lower(detection_maturity)="minimal")
SORT detection_priority DESC, threat_score DESC

```

## 3. Actors Using Execution Techniques
```dataviewjs
const name = dv.current().tactic_name;
const list = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
  .where(p => (p.tactic||[]).includes(name));

const actors = {};
for (const t of list) {
  const arr = Array.isArray(t.associated_threat_actors) ? t.associated_threat_actors :
             (t.associated_threat_actors ? [t.associated_threat_actors] : []);
  for (const a of arr) {
    const key=a.toString();
    if(!actors[key]) actors[key]={ref:a,count:0,techs:[]};
    actors[key].count++; actors[key].techs.push(t.file.link);
  }
}
dv.table(["Threat Actor","# Execution Techniques","Techniques"],
  Object.values(actors).sort((a,b)=>b.count-a.count)
  .map(x=>[x.ref,x.count,x.techs.join(", ")]));


```

## 4. Malware / Tools Used in Execution
```dataviewjs
const tacs = dv.current().tactic_name;
const execList = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
  .where(p => (p.tactic||[]).includes(tacs));

const mal = {};
for (const t of execList) {
  const arr = Array.isArray(t.associated_malware)?t.associated_malware:(t.associated_malware?[t.associated_malware]:[]);
  for(const m of arr){
    const k=m.toString(); if(!mal[k]) mal[k]={ref:m,count:0,techs:[]};
    mal[k].count++; mal[k].techs.push(t.file.link);
  }
}
dv.table(["Malware / Tool","# Execution Techniques","Techniques"],
  Object.values(mal).sort((a,b)=>b.count-a.count)
  .map(x=>[x.ref,x.count,x.techs.join(", ")]));

```

## 5. Campaigns Using Execution Techniques
```dataviewjs
const execList2 = dv.pages('"07_TTP Library (MITRE ATT&CK)"')
  .where(p => (p.tactic||[]).includes(dv.current().tactic_name));

const camps = {};
for(const t of execList2){
  const arr=Array.isArray(t.associated_campaigns)?t.associated_campaigns:(t.associated_campaigns?[t.associated_campaigns]:[]);
  for(const c of arr){
    const k=c.toString(); if(!camps[k]) camps[k]={ref:c,count:0,techs:[]};
    camps[k].count++; camps[k].techs.push(t.file.link);
  }
}
dv.table(["Campaign","# Execution Techniques","Techniques"],
  Object.values(camps).sort((a,b)=>b.count-a.count)
  .map(x=>[x.ref,x.count,x.techs.join(", ")]));

```

## 6. Incomplete Execution Techniques
```dataview
TABLE technique_id, technique_name, detection_maturity, detection_priority,
threat_score, updated
FROM "07_TTP Library (MITRE ATT&CK)"
WHERE entity_type="mitre_technique" AND contains(tactic,this.tactic_name)
AND (!technique_name OR !detection_maturity OR !detection_priority OR !threat_score)
SORT updated DESC

```
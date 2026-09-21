---
banner: 99_Attachments/CIPHER Obsidian Banner.png
banner-height: 300
content-start: 301
---
<%*
/**
 * MITRE ATT&CK Technique Templater
 * - Prompts for technique ID, name, and primary tactic
 * - Handles subtechniques (e.g., T1190.001)
 * - Renames the file to "Txxxx[.xxx] – Name"
 */

const idInput = await tp.system.prompt("MITRE Technique ID (e.g., T1110 or T1190.001)");
const nameInput = await tp.system.prompt("Technique Name (e.g., OS Credential Dumping)");
const tacticInput = await tp.system.prompt("Primary Tactic (e.g., Credential Access, Initial Access)");

const rawId = idInput.trim().toUpperCase();

// Split technique vs subtechnique
let techniqueId = rawId;
let subtechniqueId = "";
if (rawId.includes(".")) {
  techniqueId = rawId.split(".")[0];
  subtechniqueId = rawId; // full ID for the subtechnique
}

// Rename file: "T1110 – Brute Force"
const newFileName = `${rawId} - ${nameInput}`;
await tp.file.rename(newFileName);
_%>
---
entity_type: mitre_technique
technique_id: "<%* tR += techniqueId %>"
subtechnique_id: "<%* tR += subtechniqueId %>"
technique_name: "<%* tR += nameInput %>"
tactic: ["<%* tR += tacticInput %>"]
platforms: []
datasources: []
mitre_version: "v14.1"
attack_spec_version: "3.1"
attack_source: "Enterprise"
deprecated: false
revoked: false

associated_threat_actors: []
associated_malware: []
associated_campaigns: []
related_techniques: []

detection_priority: Medium
detection_maturity: Minimal
threat_score: 5

created: <% tp.date.now("YYYY-MM-DD") %>
updated: <% tp.date.now("YYYY-MM-DD") %>
contributors: []
tags:
  - mitre
  - technique
  - <%* tR += tacticInput.toLowerCase().replace(" ", "-") %>
banner: 99_Attachments/MITRE.png
banner-height: 240
---

# <%* tR += `${rawId} – ${nameInput}` %>

## **Summary**
Short explanation of what this technique does, why adversaries use it, and what it enables.

---

## **Tactic(s)**
- `[[<%* tR += `TA000X - ${tacticInput}` %>]]`  <!-- Replace TA000X with actual tactic ID later -->

---

## **Description**
In-depth description:
- Purpose
- Typical execution flow
- Affected systems / environments
- Why threat actors prefer it
- Variants and common patterns

---

## **Procedure Examples**
Real-world examples:
- `[[Threat Actor A]]` used this technique by...
- `[[Threat Actor B]]` used this technique via...

---

## **Associated Threat Actors**
- 

---

## **Associated Malware / Tools**
- 

---

## **Associated Campaigns**
- 

---

## **Detection**

### **Detection Logic**
Describe detection strategies:
- Host telemetry
- Network traffic
- Cloud telemetry
- Behavior-based indicators

### **Relevant Data Sources**
List from `datasources` and add specifics:
- 

### **Detection Notes**
- Expected noise sources
- Common evasion strategies
- EDR strengths/weaknesses

---

## **Hunting Queries**

### **KQL (Microsoft Sentinel)**
```kql
// TODO: Add a relevant hunting query for <%* tR += rawId %>

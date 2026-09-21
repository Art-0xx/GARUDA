---
entity_type: mitre_technique
technique_id:
subtechnique_id: ""
technique_name:
tactic: []
platforms: []
datasources: []
mitre_version: v14.1
attack_spec_version: "3.1"
attack_source: Enterprise
deprecated: false
revoked: false
associated_threat_actors: []
associated_malware: []
associated_campaigns: []
related_techniques: []
detection_priority:
  - Low
  - Medium
  - High
  - Critical
detection_maturity: None | Minimal | Moderate | Strong
threat_score: 1
created:
  "{ date }":
updated:
  "{ date }":
contributors: []
tags:
  - mitre
  - technique
banner: 99_Attachments/CIPHER Obsidian Banner.png
banner-height: 300
content-start: 301
---

# {{technique_id}} – {{technique_name}}

## **Summary**
A concise summary of what the technique does, why adversaries use it, and what it enables.

---

## **Tactic(s)**
- `[[TA000X - Tactic Name]]`

---

## **Description**
In-depth explanation:
- Purpose  
- Typical execution flow  
- Affected systems  
- Why adversaries prefer it  
- Variants and subtechniques  
- Relevant ATT&CK notes  

---

## **Procedure Examples**
Real-world examples from:  
Threat actors → Malware → Campaigns:

- `[[Actor]]` used this technique by…  
- `[[Malware]]` executes it through…  
- Campaign XYZ leveraged…  

---

## **Associated Threat Actors**
- `[[Threat Actor Name]]`

---

## **Associated Malware / Tools**
- `[[Malware Name]]`

---

## **Associated Campaigns**
- `[[Campaign ID]]`

---

## **Detection**

### **Detection Logic**
Describe:
- Host telemetry  
- Network telemetry  
- Cloud telemetry  
- Behavior-based signatures  

### **Relevant Data Sources**
Populate from YAML `datasources`.

### **Detection Notes**
- False positives  
- Noise  
- Gaps  
- EDR specifics  

---

## **Hunting Queries**

### **KQL (Microsoft Sentinel)**


### **Sigma**


### **EDR / OSQuery / Velociraptor**
- Platform-specific hunt logic  

---

## **Prevention**
- Hardening guidance  
- System configurations  
- Identity protections  
- Cloud controls  

---

## **Impact**
Explanation of operational, business, and security impact.

---

## **Indicators & Telemetry Patterns**
- File names  
- Commands  
- Registry keys  
- Network artifacts  
- Tokens  
- JA3 hashes  
- Strings  

---

## **Identities / Roles at Risk**
- Domain Admins  
- Service Accounts  
- Cloud privileged roles  
- Local Admins  

---

## **Environment-Specific Notes**
For your environment:
- Tools  
- Data gaps  
- Analyst lessons learned  

---

## **Data Quality Requirements**
What logs *must* be collected:
- Sysmon configs  
- Cloud audit logs  
- EDR telemetry  
- DNS logs  

---

## **False Positive Profile**
- Known benign triggers  
- Expected system activity  
- Baseline behaviors  

---

## **Related Techniques**
- `[[T#### - Technique Name]]`

---

## **Atomic Tests**
Include commands, references, or links to Validation Playbooks.

---

## **Mitigations**
Document ATT&CK Mitigations (M###) and environment-specific ones.

---

## **Evidence & Reporting**
- Case files  
- Incident tickets  
- Vendor reporting  
- MITRE links  

---

## **Analyst Notes**
Internal CTI/SOC notes.

---

## **MITRE References**
- https://attack.mitre.org/techniques/{{technique_id}}/

---

## **Change Log**
- *{{date}}:* Created  
- *{{date}}:* Updated  

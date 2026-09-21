---
entity_type: campaign
title: ""
campaign_id: LDID-###-###.00#
aliases: []
tlp_classification:
  - TLP:RED
  - TLP:AMBER
  - TLP:GREEN
  - TLP:CLEAR
associated_threat_actors: []
attribution_confidence: low | moderate | high
admiralty_source_reliability: ""
admiralty_information_credibility: ""
first_seen: ""
last_seen: ""
activity_peak: ""
target_sectors: []
target_regions: []
target_technologies:
tactics: []
techniques: []
procedures: []
malware_used: []
infrastructure_used: []
motivations: []
campaign_goals: ""
iocs: []
observed_artifacts: []
impact_summary: ""
risk_level: low | medium | high | critical
affected_business_units: []
detection_notes: ""
hunting_recommendations: []
data_sources: []
analyst_assessment: ""
analytic_confidence: low | moderate | high
intelligence_gaps: []
collection_recommendations: []
source_reports: []
related_incidents: []
updated: YYYY-MM-DD
created: YYYY-MM-DD
author: []
banner: 99_Attachments/CIPHER Obsidian Banner.png
banner-height: 300
content-start: 301
---

# # {{title}}

## **Executive Summary**
Provide a high-level overview of the campaign:
- Who is conducting it?
- What are they targeting?
- Why is this campaign relevant now?
- What is the bottom-line risk or concern?

---

## **Campaign Overview**
Describe what defines this campaign (e.g., unique lure content, malware families, shared infrastructure, targeting patterns).

Highlight:
- Major activity clusters
- Notable tradecraft
- Any evolution from previous campaigns

---

## **Timeline**
```chronos
- [2020] Event 1

- [2020-01-04~2020-01-14] Event 2

- [2020-01-10] Event 3

@ [2020-01-06~2020-01-10] Period 1
```

---

## **Associated Threat Actors**
- `[[03_Threat Actors/ActorName]]` — description of association  
- Attribution confidence and any competing vendor claims  
- Tradecraft overlap or shared infrastructure  

---

## **Targeting Profile**
### **Target Sectors**
- {{target_sectors}}

### **Target Regions**
- {{target_regions}}

### **Target Technologies**
- {{target_technologies}}

Explain why this campaign focuses on these targets and how it aligns with actor motivations.

---

## **Tactics, Techniques & Procedures (TTPs)**
Break down the attack lifecycle, using ATT&CK:

- Initial Access  
- Execution  
- Persistence  
- Lateral Movement  
- Exfiltration  
- Impact  

Add links to your internal TTP notes where possible.

---

## **Malware & Tooling**
Describe all malware families/tools used in the campaign:

- Downloaders  
- Loaders  
- RATs  
- Credential theft utilities  
- C2 frameworks (Cobalt Strike, Sliver, Mythic, custom RATs)

Include:
- Key behaviors  
- Config extractions  
- Persistence mechanisms  
- Detection notes  

---

## **Infrastructure**
Document infrastructure patterns:
- Domains  
- IP addresses  
- Hosting providers  
- C2 patterns  
- SSL fingerprints  
- Email infrastructure  

Link to IOC pages when applicable.

---

## **Indicators of Compromise**
Reference the IOCs linked to this campaign:

- `[[08_IOCs/maliciousdomain[.]com]]`
- `[[08_IOCs/35c9b2e8d8a37a4f37f7ad3e932c6c72]]`

---

## **Impact Assessment**
Describe:
- Victim impact  
- Operational effect  
- Potential business disruption  
- Sensitive data at risk  
- Cross-sector or supply chain implications  

Tie to internal risk ratings where possible.

---

## **Detection Engineering & Hunting Guidance**
Provide actionable intelligence:

### **Detection Priorities**
- High-fidelity detections  
- Log sources required  
- Gaps in telemetry  
- Detection logic that should be tuned  

### **Hunting Priority Leads**
- Behavior-based patterns  
- File/system artifacts  
- Network anomalies  
- KQL/Splunk/Sigma queries  

---

## **Analytic Assessment**
Provide your analytic judgment using tradecraft:

- What does this campaign indicate?  
- What is the actor’s intent?  
- Expected evolution or next steps  
- Likelihood of further activity  
- Confidence level (Sherman–Kent or Admiralty scale)  

---

## **Intelligence Gaps**
Document what you *don’t* yet know:

- Missing infrastructure visibility  
- Unknown malware variants  
- Attribution uncertainty  
- Unknown targeting rationale  

---

## **Recommended Actions**
Provide clear, prioritized actions:

### **Immediate Actions**
-  
### **Short-Term**
-  
### **Long-Term / Strategic**
-  

Tie them to PIRs, risk exposure, or SOC priorities.

---

## **Sources**
- Vendor intel reports  
- Internal investigations  
- Telemetry samples  
- OSINT references  

---

## **Changelog**
- Created: {{date}}  
- Updated: {{date}}  


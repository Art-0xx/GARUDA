---
entity_type: ioc
ioc_value: ""
ioc_type: []
data_source: ""
first_seen: ""
last_seen: ""
fidelity_score: ""
expiration_date: ""
expiration_reason: ""
associated_threat_actors: []
associated_malware: []
associated_campaigns: []
ttps: []
confidence: []
admiralty_source_reliability: ""
admiralty_information_credibility: ""
tags: []
file: ""
file_size: ""
file_type: ""
network_direction: ""
network_protocol: ""
status:
  - active
  - inactive
  - expired
  - false_positive
  - suspicious
notes: ""
created: ""
updated: ""
banner: 99_Attachments/CIPHER Obsidian Banner.png
banner-height: 250
content-start: 251
---

# {{title}}

## **IOC Summary**
Short statement describing what the IOC is, where it came from, and why it matters.

---

## **Indicator Details**
- **Value:** `{{ioc_value}}`  
- **Type:** {{ioc_type}}  
- **Category:** Hash, Domain, IP, URL, Filename, Registry Path, Email Address, etc.  
- **Associated Threat Actors:**  
  - {{associated_threat_actors}}  
- **Associated Malware/Tooling:**  
  - {{associated_malware}}  
- **Campaign Links:**  
  - {{associated_campaigns}}  
- **ATT&CK Techniques:**  
  - {{ttps}}  

---

## **Detection & Telemetry**
Where and how this IOC might surface in logs:

- **Primary Data Sources:** {{data_source}}  
- **Network Indicators:**  
  - Protocol: {{network_protocol}}  
  - Direction: {{network_direction}}  

- **Host Indicators:**  
  - Filename: {{file}}  
  - File Type: {{file_type}}  
  - File Size: {{file_size}}  

Include any specific log events, behaviors, or query pivots for hunting.

---

## **Hunting Queries**
Provide your KQL/Splunk/Sigma hunt queries:

### **KQL Example**
```kql
SecurityEvent  
| where CommandLine contains "{{ioc_value}}"
```

```kql
DnsEvents  
| where QueryName == "{{ioc_value}}"
```


Include other hunt logic as needed.

---

## **Analyst Assessment**
Your analytic insights:

- **Confidence:** {{confidence}}  
- **Admiralty Scale:**  
  - Source Reliability: {{admiralty_assessment.source_reliability}}  
  - Information Credibility: {{admiralty_assessment.information_credibility}}  

- **Status:** {{status}}  
- **Notes:**  
  {{notes}}  

State whether the IOC is high-fidelity, noisy, ephemeral, or risky to block.

---

## **Changelog**
- Created: {{date}}  
- Updated: {{date}}  

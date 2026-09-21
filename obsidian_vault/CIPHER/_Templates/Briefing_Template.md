---
entity_type: cti_briefing
title: ""
briefing_id: LDID-###-###.00#
tlp_classification:
  - TLP:RED
  - TLP:AMBER
  - TLP:GREEN
  - TLP:CLEAR
briefing_type:
  - weekly
  - incident-driven
  - ad-hoc
  - executive
  - threat-landscape
audience:
  - executives
  - security_leadership
  - soc_analysts
  - ir_team
priority_intelligence_requirements: []
date_range_start:
date_range_end:
created:
updated:  
analyst: ""
confidence: low | moderate | high
tags:
  - cti
  - briefing
banner: 99_Attachments/CIPHER Obsidian Banner.png
banner-height: 300
content-start: 301
---

# {{title}}

# Bottom Line Up Front (BLUF)
> [!important]+ BLUF
> What is the single most important takeaway from this briefing?  What is the risk?  Why now?  What action should be taken?


## **Executive Summary**
A short, 3–4 sentence overview covering:
- The most relevant threats within the timeframe  
- Key risk drivers  
- Any emerging concerns  
- The bottom-line-up-front (BLUF) for decision-makers  

Use clear, non-technical language suitable for leadership.

---

## **Key Findings**
Summarize your top assessed findings.

- **Finding 1:**  
- **Finding 2:**  
- **Finding 3:**  

These should be actionable and tied to PIRs or business risks.

---

## **Threat Landscape Overview**
Provide a high-level view of threat activity relevant to your org or sector.

- Global or regional threat shifts  
- Emerging groups or campaigns  
- Major vulnerabilities exploited  
- Industry-specific concerns (e.g., financial services, healthcare)

> Consider embedding charts or Dataview-powered tables for dynamic updates.

---

## **Relevant Threat Actors**
Highlight key actors active within the briefing period.

### Actor Highlights
- `[[Threat Actors/ExampleActor]]` — summary of recent behavior
- `[[Threat Actors/AnotherActor]]` — relevant changes or escalations

Include:
- New campaigns  
- New TTPs  
- Infrastructure shifts  
- Targeting patterns  

---

## **Significant Campaigns & Activity**
Document campaigns that are active, trending, or relevant.

- **Campaign 1** — summary, links, impact  
- **Campaign 2** — summary, links, detection notes  

Where possible, link to your Campaign pages:

`[[Campaigns/CampaignName]]`

---

## **Notable IOCs & Telemetry Highlights**
List meaningful, high-fidelity indicators identified during the reporting period.

> You can embed Dataview queries to auto-populate this section.

Suggested fields:
- High-fidelity IPs/domains  
- Malware hashes  
- Phishing infrastructure  
- Lateral movement artifacts  

---

## **Vulnerabilities & Exploitation Trends**
Highlight major vulnerabilities exploited recently.

- Newly exploited CVEs  
- Exploit stability  
- Patching urgency  
- Impact to your technology stack  

Useful for driving patching priorities.

---

## **Detection Engineering & Hunting Recommendations**
Provide actionable guidance:

### **Detection Enhancements**
- New alerts or analytics to deploy  
- Logic tuning  
- Data source priorities (EDR, DNS, identity logs)

### **Hunting Leads**
- Behavior-based hunts  
- Suspicious patterns  
- Log anomalies  
- Queries (KQL/Splunk/Sigma)

> Add code fences for hunt queries.

---

## **Business Impact & Risk Assessment**
Link intelligence findings to actual business impact.

- Potential operational disruption  
- Regulatory exposure  
- Fraud or financial risks  
- Brand or customer trust implications  

This section should directly answer:  
💡 *“Why should the business care?”*

---

## **Recommended Actions**
Actionable steps categorized by urgency:

### **Immediate**
-  
### **Near-Term (1–2 weeks)**
-  
### **Long-Term (strategic)**
-  

Tie these recommendations to PIRs or identified security gaps.

---

## **Appendix**
Optional supporting content:
- Graphs/charts  
- Detailed IOCs  
- Log samples  
- Additional intel references  
- Raw intelligence (separated from analysis)

---

## **Sources**
List citations, intelligence reports, feeds, logs, and notes:

- Internal telemetry  
- Vendor reports  
- Threat feeds  
- Investigations  
- OSINT sources  

---

## **Changelog**
- Created: {{date}}  
- Updated: {{date}}  


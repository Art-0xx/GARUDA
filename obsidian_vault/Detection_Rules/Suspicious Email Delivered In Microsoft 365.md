---
type: detection_rule
title: "Suspicious Email Delivered In Microsoft 365"
rule_id: 3569aefd-e535-4391-8c18-24bd01a21eaf
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1566.001, attack.t1566.002]
---

# Suspicious Email Delivered In Microsoft 365

## Description
Detects instances where an email, identified as malicious or suspicious by the Microsoft Defender for Office 365 (formerly ATP) engine, was delivered to a user's Inbox or Junk folder.
It might indicate that a potential threat, such as a spearphishing attachment or links, has bypassed initial blocking mechanisms and reached an end-user, requiring further investigation and potential remediation.

## Log Source
```yaml
product: m365
service: audit
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_blocked:
  DeliveryAction: Blocked
selection:
  Directionality: Inbound
  Operation: TIMailData
  Workload: ThreatIntelligence
```

## MITRE ATT&CK
- T1566.001
- T1566.002

## False Positives
- Unlikely

## References
- https://learn.microsoft.com/en-us/defender-office-365/threat-explorer-real-time-detections-about
- https://research.splunk.com/cloud/605cc93a-70e4-4ee3-9a3d-1a62e8c9b6c2/
- https://github.com/Bert-JanP/Hunting-Queries-Detection-Rules/blob/e7250648cb16d4a497ae8737943bf010ea96d2e6/Defender%20For%20Cloud%20Apps/MaliciousEmailDeliveredInMailbox.md

## Metadata
- **Author:** Marco Pedrinazzi (@pedrinazziM) (InTheCyber)
- **Date:** 2026-01-27
- **Rule ID:** `3569aefd-e535-4391-8c18-24bd01a21eaf`
- **Source file:** `cloud/m365/audit/microsoft365_suspicious_email_delivered.yml`

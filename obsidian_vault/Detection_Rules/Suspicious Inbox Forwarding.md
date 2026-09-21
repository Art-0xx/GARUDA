---
type: detection_rule
title: "Suspicious Inbox Forwarding"
rule_id: 6c220477-0b5b-4b25-bb90-66183b4089e8
platform: cloud
level: low
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1020]
---

# Suspicious Inbox Forwarding

## Description
Detects when a Microsoft Cloud App Security reported suspicious email forwarding rules, for example, if a user created an inbox rule that forwards a copy of all emails to an external address.

## Log Source
```yaml
product: m365
service: threat_management
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: Suspicious inbox forwarding
  eventSource: SecurityComplianceCenter
  status: success
```

## MITRE ATT&CK
- T1020

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy
- https://learn.microsoft.com/en-us/defender-cloud-apps/policy-template-reference

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-22
- **Rule ID:** `6c220477-0b5b-4b25-bb90-66183b4089e8`
- **Source file:** `cloud/m365/threat_management/microsoft365_susp_inbox_forwarding.yml`

---
type: detection_rule
title: "Data Exfiltration to Unsanctioned Apps"
rule_id: 2b669496-d215-47d8-bd9a-f4a45bf07cda
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1537]
---

# Data Exfiltration to Unsanctioned Apps

## Description
Detects when a Microsoft Cloud App Security reported when a user or IP address uses an app that is not sanctioned to perform an activity that resembles an attempt to exfiltrate information from your organization.

## Log Source
```yaml
product: m365
service: threat_management
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: Data exfiltration to unsanctioned apps
  eventSource: SecurityComplianceCenter
  status: success
```

## MITRE ATT&CK
- T1537

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy
- https://learn.microsoft.com/en-us/defender-cloud-apps/policy-template-reference

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-23
- **Rule ID:** `2b669496-d215-47d8-bd9a-f4a45bf07cda`
- **Source file:** `cloud/m365/threat_management/microsoft365_data_exfiltration_to_unsanctioned_app.yml`

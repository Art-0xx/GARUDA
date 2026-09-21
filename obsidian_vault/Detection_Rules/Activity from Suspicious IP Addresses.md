---
type: detection_rule
title: "Activity from Suspicious IP Addresses"
rule_id: a3501e8e-af9e-43c6-8cd6-9360bdaae498
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1573]
---

# Activity from Suspicious IP Addresses

## Description
Detects when a Microsoft Cloud App Security reported users were active from an IP address identified as risky by Microsoft Threat Intelligence.
These IP addresses are involved in malicious activities, such as Botnet C&C, and may indicate compromised account.

## Log Source
```yaml
product: m365
service: threat_detection
```

## Detection Logic
```yaml
condition: selection
selection:
  eventName: Activity from suspicious IP addresses
  eventSource: SecurityComplianceCenter
  status: success
```

## MITRE ATT&CK
- T1573

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/defender-cloud-apps/anomaly-detection-policy
- https://learn.microsoft.com/en-us/defender-cloud-apps/policy-template-reference

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-08-23
- **Rule ID:** `a3501e8e-af9e-43c6-8cd6-9360bdaae498`
- **Source file:** `cloud/m365/threat_detection/microsoft365_from_susp_ip_addresses.yml`

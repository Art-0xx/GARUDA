---
type: detection_rule
title: "PST Export Alert Using New-ComplianceSearchAction"
rule_id: 6897cd82-6664-11ed-9022-0242ac120002
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1114]
---

# PST Export Alert Using New-ComplianceSearchAction

## Description
Alert when a user has performed an export to a search using 'New-ComplianceSearchAction' with the '-Export' flag. This detection will detect PST export even if the 'eDiscovery search or exported' alert is disabled in the O365.This rule will apply to ExchangePowerShell usage and from the cloud.

## Log Source
```yaml
product: m365
service: threat_management
```

## Detection Logic
```yaml
condition: selection
selection:
  Payload|contains|all:
  - New-ComplianceSearchAction
  - Export
  - pst
  eventSource: SecurityComplianceCenter
```

## MITRE ATT&CK
- T1114

## False Positives
- Exporting a PST can be done for legitimate purposes by legitimate sources, but due to the sensitive nature of PST content, it must be monitored.

## References
- https://learn.microsoft.com/en-us/powershell/module/exchange/new-compliancesearchaction?view=exchange-ps

## Metadata
- **Author:** Nikita Khalimonenkov
- **Date:** 2022-11-17
- **Rule ID:** `6897cd82-6664-11ed-9022-0242ac120002`
- **Source file:** `cloud/m365/threat_management/microsoft365_pst_export_alert_using_new_compliancesearchaction.yml`

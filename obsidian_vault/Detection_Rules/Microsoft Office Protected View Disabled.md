---
type: detection_rule
title: "Microsoft Office Protected View Disabled"
rule_id: a5c7a43f-6009-4a8c-80c5-32abf1c53ecc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Microsoft Office Protected View Disabled

## Description
Detects changes to Microsoft Office protected view registry keys with which the attacker disables this feature.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection_path and 1 of selection_values_*
selection_path:
  TargetObject|contains|all:
  - \SOFTWARE\Microsoft\Office\
  - \Security\ProtectedView\
selection_values_0:
  Details: DWORD (0x00000000)
  TargetObject|endswith:
  - \enabledatabasefileprotectedview
  - \enableforeigntextfileprotectedview
selection_values_1:
  Details: DWORD (0x00000001)
  TargetObject|endswith:
  - \DisableAttachementsInPV
  - \DisableInternetFilesInPV
  - \DisableIntranetCheck
  - \DisableUnsafeLocationsInPV
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1562.001/T1562.001.md
- https://unit42.paloaltonetworks.com/unit42-gorgon-group-slithering-nation-state-cybercrime/
- https://yoroi.company/research/cyber-criminal-espionage-operation-insists-on-italian-manufacturing/
- https://admx.help/HKCU/software/policies/microsoft/office/16.0/excel/security/protectedview

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-06-08
- **Rule ID:** `a5c7a43f-6009-4a8c-80c5-32abf1c53ecc`
- **Source file:** `windows/registry/registry_set/registry_set_office_disable_protected_view_features.yml`

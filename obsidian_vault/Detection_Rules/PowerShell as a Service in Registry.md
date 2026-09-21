---
type: detection_rule
title: "PowerShell as a Service in Registry"
rule_id: 4a5f5a5e-ac01-474b-9b4e-d61298c9df1d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1569.002]
---

# PowerShell as a Service in Registry

## Description
Detects that a powershell code is written to the registry as a service.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|contains:
  - powershell
  - pwsh
  TargetObject|contains: \Services\
  TargetObject|endswith: \ImagePath
```

## MITRE ATT&CK
- T1569.002

## False Positives
- Unknown

## References
- https://speakerdeck.com/heirhabarov/hunting-for-powershell-abuse

## Metadata
- **Author:** oscd.community, Natalia Shornikova
- **Date:** 2020-10-06
- **Rule ID:** `4a5f5a5e-ac01-474b-9b4e-d61298c9df1d`
- **Source file:** `windows/registry/registry_set/registry_set_powershell_as_service.yml`

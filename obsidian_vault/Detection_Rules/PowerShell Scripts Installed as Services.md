---
type: detection_rule
title: "PowerShell Scripts Installed as Services"
rule_id: a2e5019d-a658-4c6a-92bf-7197b54e2cae
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1569.002]
---

# PowerShell Scripts Installed as Services

## Description
Detects powershell script installed as a Service

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 7045
  ImagePath|contains:
  - powershell
  - pwsh
  Provider_Name: Service Control Manager
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
- **Rule ID:** `a2e5019d-a658-4c6a-92bf-7197b54e2cae`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_powershell_script_installed_as_service.yml`

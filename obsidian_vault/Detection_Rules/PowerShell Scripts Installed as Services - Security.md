---
type: detection_rule
title: "PowerShell Scripts Installed as Services - Security"
rule_id: 2a926e6a-4b81-4011-8a96-e36cc8c04302
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1569.002]
---

# PowerShell Scripts Installed as Services - Security

## Description
Detects powershell script installed as a Service

## Log Source
```yaml
definition: The 'System Security Extension' audit subcategory need to be enabled to
  log the EID 4697
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 4697
  ServiceFileName|contains:
  - powershell
  - pwsh
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
- **Rule ID:** `2a926e6a-4b81-4011-8a96-e36cc8c04302`
- **Source file:** `windows/builtin/security/win_security_powershell_script_installed_as_service.yml`

---
type: detection_rule
title: "Invoke-Obfuscation RUNDLL LAUNCHER - Security"
rule_id: f241cf1b-3a6b-4e1a-b4f9-133c00dd95ca
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation RUNDLL LAUNCHER - Security

## Description
Detects Obfuscated Powershell via RUNDLL LAUNCHER

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
  ServiceFileName|contains|all:
  - rundll32.exe
  - shell32.dll
  - shellexec_rundll
  - powershell
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2020-10-18
- **Rule ID:** `f241cf1b-3a6b-4e1a-b4f9-133c00dd95ca`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_rundll_services_security.yml`

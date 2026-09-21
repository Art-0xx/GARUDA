---
type: detection_rule
title: "Invoke-Obfuscation Via Use Rundll32 - Security"
rule_id: cd0f7229-d16f-42de-8fe3-fba365fbcb3a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Rundll32 - Security

## Description
Detects Obfuscated Powershell via use Rundll32 in Scripts

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
  - value
  - invoke
  - comspec
  - iex
  ServiceFileName|contains|all:
  - '&&'
  - rundll32
  - shell32.dll
  - shellexec_rundll
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-09
- **Rule ID:** `cd0f7229-d16f-42de-8fe3-fba365fbcb3a`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_use_rundll32_services_security.yml`

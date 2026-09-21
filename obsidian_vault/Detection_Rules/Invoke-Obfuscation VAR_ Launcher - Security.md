---
type: detection_rule
title: "Invoke-Obfuscation VAR+ Launcher - Security"
rule_id: dcf2db1f-f091-425b-a821-c05875b8925a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR+ Launcher - Security

## Description
Detects Obfuscated use of Environment Variables to execute PowerShell

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
  - /c
  - /r
  ServiceFileName|contains|all:
  - cmd
  - '"set'
  - -f
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-15
- **Rule ID:** `dcf2db1f-f091-425b-a821-c05875b8925a`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_var_services_security.yml`

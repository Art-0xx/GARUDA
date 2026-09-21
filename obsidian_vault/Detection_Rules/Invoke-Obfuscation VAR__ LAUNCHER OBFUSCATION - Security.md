---
type: detection_rule
title: "Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - Security"
rule_id: 4c54ba8f-73d2-4d40-8890-d9cf1dca3d30
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - Security

## Description
Detects Obfuscated Powershell via VAR++ LAUNCHER

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
  - '{0}'
  - '{1}'
  - '{2}'
  - '{3}'
  - '{4}'
  - '{5}'
  ServiceFileName|contains|all:
  - '&&set'
  - cmd
  - /c
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
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `4c54ba8f-73d2-4d40-8890-d9cf1dca3d30`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_var_services_security.yml`

---
type: detection_rule
title: "Invoke-Obfuscation Via Stdin - Security"
rule_id: 80b708f3-d034-40e4-a6c8-d23b7a7db3d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Stdin - Security

## Description
Detects Obfuscated Powershell via Stdin in Scripts

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
  - environment
  - invoke
  - ${input)
  ServiceFileName|contains|all:
  - set
  - '&&'
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
- **Date:** 2020-10-12
- **Rule ID:** `80b708f3-d034-40e4-a6c8-d23b7a7db3d1`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_stdin_services_security.yml`

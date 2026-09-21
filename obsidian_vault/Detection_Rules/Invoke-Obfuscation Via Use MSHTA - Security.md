---
type: detection_rule
title: "Invoke-Obfuscation Via Use MSHTA - Security"
rule_id: 9b8d9203-4e0f-4cd9-bb06-4cc4ea6d0e9a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use MSHTA - Security

## Description
Detects Obfuscated Powershell via use MSHTA in Scripts

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
  - mshta
  - vbscript:createobject
  - .run
  - window.close
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
- **Rule ID:** `9b8d9203-4e0f-4cd9-bb06-4cc4ea6d0e9a`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_use_mshta_services_security.yml`

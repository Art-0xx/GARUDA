---
type: detection_rule
title: "Invoke-Obfuscation CLIP+ Launcher - Security"
rule_id: 4edf51e1-cb83-4e1a-bc39-800e396068e3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation CLIP+ Launcher - Security

## Description
Detects Obfuscated use of Clip.exe to execute PowerShell

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
  - cmd
  - '&&'
  - 'clipboard]::'
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
- **Date:** 2020-10-13
- **Rule ID:** `4edf51e1-cb83-4e1a-bc39-800e396068e3`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_clip_services_security.yml`

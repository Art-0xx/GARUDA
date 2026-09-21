---
type: detection_rule
title: "Invoke-Obfuscation Via Use Clip - Security"
rule_id: 1a0a2ff1-611b-4dac-8216-8a7b47c618a6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Clip - Security

## Description
Detects Obfuscated Powershell via use Clip.exe in Scripts

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
  ServiceFileName|contains: (Clipboard|i
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
- **Rule ID:** `1a0a2ff1-611b-4dac-8216-8a7b47c618a6`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_use_clip_services_security.yml`

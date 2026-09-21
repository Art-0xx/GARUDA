---
type: detection_rule
title: "Invoke-Obfuscation COMPRESS OBFUSCATION - Security"
rule_id: 7a922f1b-2635-4d6c-91ef-af228b198ad3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation COMPRESS OBFUSCATION - Security

## Description
Detects Obfuscated Powershell via COMPRESS OBFUSCATION

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
  - system.io.compression.deflatestream
  - system.io.streamreader
  ServiceFileName|contains|all:
  - new-object
  - text.encoding]::ascii
  - readtoend
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
- **Rule ID:** `7a922f1b-2635-4d6c-91ef-af228b198ad3`
- **Source file:** `windows/builtin/security/win_security_invoke_obfuscation_via_compress_services_security.yml`

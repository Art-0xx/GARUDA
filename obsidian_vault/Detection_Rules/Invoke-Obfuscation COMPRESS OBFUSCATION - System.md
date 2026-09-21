---
type: detection_rule
title: "Invoke-Obfuscation COMPRESS OBFUSCATION - System"
rule_id: 175997c5-803c-4b08-8bb0-70b099f47595
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation COMPRESS OBFUSCATION - System

## Description
Detects Obfuscated Powershell via COMPRESS OBFUSCATION

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 7045
  ImagePath|contains:
  - :system.io.compression.deflatestream
  - system.io.streamreader
  ImagePath|contains|all:
  - new-object
  - text.encoding]::ascii
  - readtoend
  Provider_Name: Service Control Manager
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
- **Rule ID:** `175997c5-803c-4b08-8bb0-70b099f47595`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_compress_services.yml`

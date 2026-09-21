---
type: detection_rule
title: "Invoke-Obfuscation Via Use Clip - System"
rule_id: 63e3365d-4824-42d8-8b82-e56810fefa0c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Clip - System

## Description
Detects Obfuscated Powershell via use Clip.exe in Scripts

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
  ImagePath|contains: (Clipboard|i
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
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-09
- **Rule ID:** `63e3365d-4824-42d8-8b82-e56810fefa0c`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_use_clip_services.yml`

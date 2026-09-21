---
type: detection_rule
title: "Invoke-Obfuscation Via Use MSHTA - System"
rule_id: 7e9c7999-0f9b-4d4a-a6ed-af6d553d4af4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use MSHTA - System

## Description
Detects Obfuscated Powershell via use MSHTA in Scripts

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
  ImagePath|contains|all:
  - mshta
  - vbscript:createobject
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
- **Rule ID:** `7e9c7999-0f9b-4d4a-a6ed-af6d553d4af4`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_use_mshta_services.yml`

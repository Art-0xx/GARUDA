---
type: detection_rule
title: "Invoke-Obfuscation Via Use Rundll32 - System"
rule_id: 641a4bfb-c017-44f7-800c-2aee0184ce9b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Rundll32 - System

## Description
Detects Obfuscated Powershell via use Rundll32 in Scripts

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
  - value
  - invoke
  - comspec
  - iex
  ImagePath|contains|all:
  - '&&'
  - rundll32
  - shell32.dll
  - shellexec_rundll
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
- **Rule ID:** `641a4bfb-c017-44f7-800c-2aee0184ce9b`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_use_rundll32_services.yml`

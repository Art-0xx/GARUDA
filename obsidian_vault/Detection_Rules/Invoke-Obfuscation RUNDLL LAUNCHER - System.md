---
type: detection_rule
title: "Invoke-Obfuscation RUNDLL LAUNCHER - System"
rule_id: 11b52f18-aaec-4d60-9143-5dd8cc4706b9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation RUNDLL LAUNCHER - System

## Description
Detects Obfuscated Powershell via RUNDLL LAUNCHER

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
  - rundll32.exe
  - shell32.dll
  - shellexec_rundll
  - powershell
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
- **Rule ID:** `11b52f18-aaec-4d60-9143-5dd8cc4706b9`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_via_rundll_services.yml`

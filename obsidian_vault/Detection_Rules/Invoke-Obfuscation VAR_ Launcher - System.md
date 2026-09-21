---
type: detection_rule
title: "Invoke-Obfuscation VAR+ Launcher - System"
rule_id: 8ca7004b-e620-4ecb-870e-86129b5b8e75
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR+ Launcher - System

## Description
Detects Obfuscated use of Environment Variables to execute PowerShell

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
  - /c
  - /r
  ImagePath|contains|all:
  - cmd
  - '"set'
  - -f
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
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-15
- **Rule ID:** `8ca7004b-e620-4ecb-870e-86129b5b8e75`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_var_services.yml`

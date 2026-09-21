---
type: detection_rule
title: "Invoke-Obfuscation CLIP+ Launcher - System"
rule_id: f7385ee2-0e0c-11eb-adc1-0242ac120002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation CLIP+ Launcher - System

## Description
Detects Obfuscated use of Clip.exe to execute PowerShell

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
  - cmd
  - '&&'
  - 'clipboard]::'
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
- **Date:** 2020-10-13
- **Rule ID:** `f7385ee2-0e0c-11eb-adc1-0242ac120002`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_clip_services.yml`

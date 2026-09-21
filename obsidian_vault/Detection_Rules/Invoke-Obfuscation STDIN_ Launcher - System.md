---
type: detection_rule
title: "Invoke-Obfuscation STDIN+ Launcher - System"
rule_id: 72862bf2-0eb1-11eb-adc1-0242ac120002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation STDIN+ Launcher - System

## Description
Detects Obfuscated use of stdin to execute PowerShell

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: all of selection_*
selection_main:
  EventID: 7045
  ImagePath|contains:
  - /c
  - /r
  ImagePath|contains|all:
  - cmd
  - powershell
  Provider_Name: Service Control Manager
selection_other:
- ImagePath|contains: noexit
- ImagePath|contains|all:
  - input
  - $
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
- **Rule ID:** `72862bf2-0eb1-11eb-adc1-0242ac120002`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_invoke_obfuscation_stdin_services.yml`

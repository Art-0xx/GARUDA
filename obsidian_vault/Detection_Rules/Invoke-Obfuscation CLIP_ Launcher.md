---
type: detection_rule
title: "Invoke-Obfuscation CLIP+ Launcher"
rule_id: b222df08-0e07-11eb-adc1-0242ac120002
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation CLIP+ Launcher

## Description
Detects Obfuscated use of Clip.exe to execute PowerShell

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - /c
  - /r
  CommandLine|contains|all:
  - cmd
  - '&&'
  - 'clipboard]::'
  - -f
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
- **Rule ID:** `b222df08-0e07-11eb-adc1-0242ac120002`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_invoke_obfuscation_clip.yml`

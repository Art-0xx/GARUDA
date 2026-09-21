---
type: detection_rule
title: "UAC Bypass Using DismHost"
rule_id: 853e74f9-9392-4935-ad3b-2e8c040dae86
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using DismHost

## Description
Detects the pattern of UAC Bypass using DismHost DLL hijacking (UACMe 63)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentImage|contains|all:
  - C:\Users\
  - \AppData\Local\Temp\
  - \DismHost.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-30
- **Rule ID:** `853e74f9-9392-4935-ad3b-2e8c040dae86`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_dismhost.yml`

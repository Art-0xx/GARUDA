---
type: detection_rule
title: "UAC Bypass Using IEInstal - Process"
rule_id: 80fc36aa-945e-4181-89f2-2f907ab6775d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using IEInstal - Process

## Description
Detects the pattern of UAC Bypass using IEInstal.exe (UACMe 64)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains: \AppData\Local\Temp\
  Image|endswith: consent.exe
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentImage|endswith: \ieinstal.exe
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
- **Rule ID:** `80fc36aa-945e-4181-89f2-2f907ab6775d`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_ieinstal.yml`

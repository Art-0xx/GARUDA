---
type: detection_rule
title: "UAC Bypass Using Windows Media Player - Process"
rule_id: 0058b9e5-bcd7-40d4-9205-95ca5a16d7b2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Windows Media Player - Process

## Description
Detects the pattern of UAC Bypass using Windows Media Player osksupport.dll (UACMe 32)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_img_* and selection_integrity
selection_img_1:
  Image: C:\Program Files\Windows Media Player\osk.exe
selection_img_2:
  Image: C:\Windows\System32\cmd.exe
  ParentCommandLine: '"C:\Windows\system32\mmc.exe" "C:\Windows\system32\eventvwr.msc"
    /s'
selection_integrity:
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `0058b9e5-bcd7-40d4-9205-95ca5a16d7b2`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_wmp.yml`

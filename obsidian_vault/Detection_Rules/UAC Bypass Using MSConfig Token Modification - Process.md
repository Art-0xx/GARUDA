---
type: detection_rule
title: "UAC Bypass Using MSConfig Token Modification - Process"
rule_id: ad92e3f9-7eb6-460e-96b1-582b0ccbb980
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using MSConfig Token Modification - Process

## Description
Detects the pattern of UAC Bypass using a msconfig GUI hack (UACMe 55)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine: '"C:\Windows\system32\msconfig.exe" -5'
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentImage|endswith: \AppData\Local\Temp\pkgmgr.exe
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
- **Rule ID:** `ad92e3f9-7eb6-460e-96b1-582b0ccbb980`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_msconfig_gui.yml`

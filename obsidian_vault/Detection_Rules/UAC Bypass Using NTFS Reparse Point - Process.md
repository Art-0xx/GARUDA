---
type: detection_rule
title: "UAC Bypass Using NTFS Reparse Point - Process"
rule_id: 39ed3c80-e6a1-431b-9df3-911ac53d08a7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using NTFS Reparse Point - Process

## Description
Detects the pattern of UAC Bypass using NTFS reparse point and wusa.exe DLL hijacking (UACMe 36)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  CommandLine|endswith: \AppData\Local\Temp\update.msu
  CommandLine|startswith: '"C:\Windows\system32\wusa.exe"  /quiet C:\Users\'
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
selection2:
  CommandLine|contains|all:
  - C:\Users\
  - \AppData\Local\Temp\
  - \dismhost.exe {
  Image|endswith: \DismHost.exe
  IntegrityLevel:
  - High
  - System
  ParentCommandLine: '"C:\Windows\system32\dism.exe" /online /quiet /norestart /add-package
    /packagepath:"C:\Windows\system32\pe386" /ignorecheck'
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
- **Rule ID:** `39ed3c80-e6a1-431b-9df3-911ac53d08a7`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_ntfs_reparse_point.yml`

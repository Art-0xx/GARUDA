---
type: detection_rule
title: "UAC Bypass Using NTFS Reparse Point - File"
rule_id: 7fff6773-2baa-46de-a24a-b6eec1aba2d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using NTFS Reparse Point - File

## Description
Detects the pattern of UAC Bypass using NTFS reparse point and wusa.exe DLL hijacking (UACMe 36)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \AppData\Local\Temp\api-ms-win-core-kernel32-legacy-l1.DLL
  TargetFilename|startswith: C:\Users\
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
- **Rule ID:** `7fff6773-2baa-46de-a24a-b6eec1aba2d1`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_ntfs_reparse_point.yml`

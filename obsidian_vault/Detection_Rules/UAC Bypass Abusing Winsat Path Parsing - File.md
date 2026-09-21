---
type: detection_rule
title: "UAC Bypass Abusing Winsat Path Parsing - File"
rule_id: 155dbf56-e0a4-4dd0-8905-8a98705045e8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Abusing Winsat Path Parsing - File

## Description
Detects the pattern of UAC Bypass using a path parsing issue in winsat.exe (UACMe 52)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith:
  - \AppData\Local\Temp\system32\winsat.exe
  - \AppData\Local\Temp\system32\winmm.dll
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
- **Rule ID:** `155dbf56-e0a4-4dd0-8905-8a98705045e8`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_winsat.yml`

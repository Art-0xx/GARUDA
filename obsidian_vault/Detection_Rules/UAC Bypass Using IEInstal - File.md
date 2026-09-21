---
type: detection_rule
title: "UAC Bypass Using IEInstal - File"
rule_id: bdd8157d-8e85-4397-bb82-f06cc9c71dbb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using IEInstal - File

## Description
Detects the pattern of UAC Bypass using IEInstal.exe (UACMe 64)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image: C:\Program Files\Internet Explorer\IEInstal.exe
  TargetFilename|contains: \AppData\Local\Temp\
  TargetFilename|endswith: consent.exe
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
- **Rule ID:** `bdd8157d-8e85-4397-bb82-f06cc9c71dbb`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_ieinstal.yml`

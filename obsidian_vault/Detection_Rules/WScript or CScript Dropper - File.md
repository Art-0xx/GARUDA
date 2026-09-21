---
type: detection_rule
title: "WScript or CScript Dropper - File"
rule_id: 002bdb95-0cf1-46a6-9e08-d38c128a6127
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005, attack.t1059.007]
---

# WScript or CScript Dropper - File

## Description
Detects a file ending in jse, vbe, js, vba, vbs, wsf, wsh written by cscript.exe or wscript.exe

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \wscript.exe
  - \cscript.exe
  TargetFilename|contains:
  - :\Perflogs\
  - :\ProgramData\
  - :\Temp\
  - :\Tmp\
  - :\Users\
  - :\Windows\Temp\
  - \AppData\Local\Temp
  - \AppData\Roaming\Temp
  - \Start Menu\Programs\Startup\
  - \Temporary Internet
  TargetFilename|endswith:
  - .js
  - .jse
  - .vba
  - .vbe
  - .vbs
  - .wsf
  - .wsh
```

## MITRE ATT&CK
- T1059.005
- T1059.007

## False Positives
- Unknown

## References
- WScript or CScript Dropper (cea72823-df4d-4567-950c-0b579eaf0846)

## Metadata
- **Author:** Tim Shelton
- **Date:** 2022-01-10
- **Rule ID:** `002bdb95-0cf1-46a6-9e08-d38c128a6127`
- **Source file:** `windows/file/file_event/file_event_win_cscript_wscript_dropper.yml`

---
type: detection_rule
title: "UAC Bypass Using Windows Media Player - File"
rule_id: 68578b43-65df-4f81-9a9b-92f32711a951
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Windows Media Player - File

## Description
Detects the pattern of UAC Bypass using Windows Media Player osksupport.dll (UACMe 32)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  TargetFilename|endswith: \AppData\Local\Temp\OskSupport.dll
  TargetFilename|startswith: C:\Users\
selection2:
  Image: C:\Windows\system32\DllHost.exe
  TargetFilename: C:\Program Files\Windows Media Player\osk.exe
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
- **Rule ID:** `68578b43-65df-4f81-9a9b-92f32711a951`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_wmp.yml`

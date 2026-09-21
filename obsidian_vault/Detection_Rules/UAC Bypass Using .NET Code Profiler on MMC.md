---
type: detection_rule
title: "UAC Bypass Using .NET Code Profiler on MMC"
rule_id: 93a19907-d4f9-4deb-9f91-aac4692776a6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using .NET Code Profiler on MMC

## Description
Detects the pattern of UAC Bypass using .NET Code Profiler and mmc.exe DLL hijacking (UACMe 39)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \AppData\Local\Temp\pe386.dll
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
- **Rule ID:** `93a19907-d4f9-4deb-9f91-aac4692776a6`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_dotnet_profiler.yml`

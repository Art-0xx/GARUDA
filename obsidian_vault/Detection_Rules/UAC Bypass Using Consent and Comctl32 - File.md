---
type: detection_rule
title: "UAC Bypass Using Consent and Comctl32 - File"
rule_id: 62ed5b55-f991-406a-85d9-e8e8fdf18789
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Consent and Comctl32 - File

## Description
Detects the pattern of UAC Bypass using consent.exe and comctl32.dll (UACMe 22)

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \comctl32.dll
  TargetFilename|startswith: C:\Windows\System32\consent.exe.@
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
- **Rule ID:** `62ed5b55-f991-406a-85d9-e8e8fdf18789`
- **Source file:** `windows/file/file_event/file_event_win_uac_bypass_consent_comctl32.yml`

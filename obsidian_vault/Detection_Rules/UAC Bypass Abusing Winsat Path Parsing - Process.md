---
type: detection_rule
title: "UAC Bypass Abusing Winsat Path Parsing - Process"
rule_id: 7a01183d-71a2-46ad-ad5c-acd989ac1793
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Abusing Winsat Path Parsing - Process

## Description
Detects the pattern of UAC Bypass using a path parsing issue in winsat.exe (UACMe 52)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentCommandLine|contains: C:\Windows \system32\winsat.exe
  ParentImage|endswith: \AppData\Local\Temp\system32\winsat.exe
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
- **Rule ID:** `7a01183d-71a2-46ad-ad5c-acd989ac1793`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_winsat.yml`

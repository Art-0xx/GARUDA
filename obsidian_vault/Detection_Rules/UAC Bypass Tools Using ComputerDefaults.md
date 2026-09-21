---
type: detection_rule
title: "UAC Bypass Tools Using ComputerDefaults"
rule_id: 3c05e90d-7eba-4324-9972-5d7f711a60a8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Tools Using ComputerDefaults

## Description
Detects tools such as UACMe used to bypass UAC with computerdefaults.exe (UACMe 59)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ParentImage|contains:
  - :\Windows\System32
  - :\Program Files
selection:
  Image: C:\Windows\System32\ComputerDefaults.exe
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-31
- **Rule ID:** `3c05e90d-7eba-4324-9972-5d7f711a60a8`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_computerdefaults.yml`

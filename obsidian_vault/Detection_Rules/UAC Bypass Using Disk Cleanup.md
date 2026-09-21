---
type: detection_rule
title: "UAC Bypass Using Disk Cleanup"
rule_id: b697e69c-746f-4a86-9f59-7bfff8eab881
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Disk Cleanup

## Description
Detects the pattern of UAC Bypass using scheduled tasks and variable expansion of cleanmgr.exe (UACMe 34)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|endswith: '"\system32\cleanmgr.exe /autoclean /d C:'
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentCommandLine: C:\Windows\system32\svchost.exe -k netsvcs -p -s Schedule
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
- **Rule ID:** `b697e69c-746f-4a86-9f59-7bfff8eab881`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_cleanmgr.yml`

---
type: detection_rule
title: "Suspicious Schtasks Schedule Types"
rule_id: 24c8392b-aa3c-46b7-a545-43f71657fe98
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Schtasks Schedule Types

## Description
Detects scheduled task creations or modification on a suspicious schedule type

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_privs:
  CommandLine|contains:
  - NT AUT
  - ' SYSTEM'
  - HIGHEST
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
selection_time:
  CommandLine|contains:
  - ' ONLOGON '
  - ' ONSTART '
  - ' ONCE '
  - ' ONIDLE '
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Legitimate processes that run at logon. Filter according to your environment

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks-change
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks-create
- http://blog.talosintelligence.com/2022/09/lazarus-three-rats.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `24c8392b-aa3c-46b7-a545-43f71657fe98`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_schedule_type.yml`

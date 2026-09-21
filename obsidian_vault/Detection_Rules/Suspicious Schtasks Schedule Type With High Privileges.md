---
type: detection_rule
title: "Suspicious Schtasks Schedule Type With High Privileges"
rule_id: 7a02e22e-b885-4404-b38b-1ddc7e65258a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Schtasks Schedule Type With High Privileges

## Description
Detects scheduled task creations or modification to be run with high privileges on a suspicious schedule type

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
selection_privs:
  CommandLine|contains:
  - NT AUT
  - ' SYSTEM'
  - HIGHEST
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
- Some installers were seen using this method of creation unfortunately. Filter them in your environment

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks-change
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks-create

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-31
- **Rule ID:** `7a02e22e-b885-4404-b38b-1ddc7e65258a`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_schedule_type_system.yml`

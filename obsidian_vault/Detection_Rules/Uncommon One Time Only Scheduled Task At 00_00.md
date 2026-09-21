---
type: detection_rule
title: "Uncommon One Time Only Scheduled Task At 00:00"
rule_id: 970823b7-273b-460a-8afc-3a6811998529
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Uncommon One Time Only Scheduled Task At 00:00

## Description
Detects scheduled task creation events that include suspicious actions, and is run once at 00:00

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - wscript
  - vbscript
  - cscript
  - 'wmic '
  - wmic.exe
  - regsvr32.exe
  - powershell
  - \AppData\
selection_img:
- Image|contains: \schtasks.exe
- OriginalFileName: schtasks.exe
selection_time:
  CommandLine|contains|all:
  - once
  - 00:00
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Software installation

## References
- https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-blackbyte

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-07-15
- **Rule ID:** `970823b7-273b-460a-8afc-3a6811998529`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_one_time_only_midnight_task.yml`

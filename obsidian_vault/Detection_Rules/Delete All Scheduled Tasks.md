---
type: detection_rule
title: "Delete All Scheduled Tasks"
rule_id: 220457c1-1c9f-4c2e-afe6-9598926222c1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1489]
---

# Delete All Scheduled Tasks

## Description
Detects the usage of schtasks with the delete flag and the asterisk symbol to delete all tasks from the schedule of the local computer, including tasks scheduled by other users.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - ' /delete '
  - /tn \*
  - ' /f'
  Image|endswith: \schtasks.exe
```

## MITRE ATT&CK
- T1489

## False Positives
- Unlikely

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks-delete

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `220457c1-1c9f-4c2e-afe6-9598926222c1`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_delete_all.yml`

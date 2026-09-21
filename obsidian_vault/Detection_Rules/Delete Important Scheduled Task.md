---
type: detection_rule
title: "Delete Important Scheduled Task"
rule_id: dbc1f800-0fe0-4bc0-9c66-292c2abe3f78
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1489]
---

# Delete Important Scheduled Task

## Description
Detects when adversaries stop services or processes by deleting their respective scheduled tasks in order to conduct data destructive activities

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_delete:
  CommandLine|contains|windash: /delete
selection_cli_task:
  CommandLine|contains:
  - \Windows\BitLocker
  - \Windows\ExploitGuard
  - \Windows\SystemRestore\SR
  - \Windows\UpdateOrchestrator\
  - \Windows\Windows Defender\
  - \Windows\WindowsBackup\
  - \Windows\WindowsUpdate\
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1489

## False Positives
- Unlikely

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `dbc1f800-0fe0-4bc0-9c66-292c2abe3f78`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_delete.yml`

---
type: detection_rule
title: "Important Scheduled Task Deleted or Disabled"
rule_id: 9e3cb244-bdb8-4632-8c90-6079c8f4f16d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1489]
---

# Important Scheduled Task Deleted or Disabled

## Description
Detects when adversaries try to stop system services or processes by deleting or disabling their respective scheduled tasks in order to conduct data destructive activities

## Log Source
```yaml
definition: 'Requirements: The "Microsoft-Windows-TaskScheduler/Operational" is disabled
  by default and needs to be enabled in order for this detection to trigger'
product: windows
service: taskscheduler
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_user:
  UserName|contains:
  - AUTHORI
  - AUTORI
selection:
  EventID:
  - 141
  - 142
  TaskName|contains:
  - \Windows\SystemRestore\SR
  - \Windows\Windows Defender\
  - \Windows\BitLocker
  - \Windows\WindowsBackup\
  - \Windows\WindowsUpdate\
  - \Windows\UpdateOrchestrator\
  - \Windows\ExploitGuard
```

## MITRE ATT&CK
- T1489

## False Positives
- Unknown

## References
- https://www.socinvestigation.com/most-common-windows-event-ids-to-hunt-mind-map/

## Metadata
- **Author:** frack113
- **Date:** 2023-01-13
- **Rule ID:** `9e3cb244-bdb8-4632-8c90-6079c8f4f16d`
- **Source file:** `windows/builtin/taskscheduler/win_taskscheduler_susp_schtasks_delete_or_disable.yml`

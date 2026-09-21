---
type: detection_rule
title: "Disable Important Scheduled Task"
rule_id: 9ac94dc8-9042-493c-ba45-3b5e7c86b980
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1489]
---

# Disable Important Scheduled Task

## Description
Detects when adversaries stop services or processes by disabling their respective scheduled tasks in order to conduct data destructive activities

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_disable:
  CommandLine|contains|windash: /disable
selection_cli_task:
  CommandLine|contains:
  - \Windows\BitLocker
  - \Windows\ExploitGuard
  - \Windows\ExploitGuard\ExploitGuard MDM policy Refresh
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
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md#atomic-test-8---windows---disable-the-sr-scheduled-task
- https://twitter.com/MichalKoczwara/status/1553634816016498688
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems), X__Junior
- **Date:** 2021-12-26
- **Rule ID:** `9ac94dc8-9042-493c-ba45-3b5e7c86b980`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_disable.yml`

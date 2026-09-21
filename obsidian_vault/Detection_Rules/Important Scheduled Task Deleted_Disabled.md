---
type: detection_rule
title: "Important Scheduled Task Deleted/Disabled"
rule_id: 7595ba94-cf3b-4471-aa03-4f6baa9e5fad
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Important Scheduled Task Deleted/Disabled

## Description
Detects when adversaries stop services or processes by deleting or disabling their respective scheduled tasks in order to conduct data destructive activities

## Log Source
```yaml
definition: The Advanced Audit Policy setting Object Access > Audit Other Object Access
  Events has to be configured to allow this detection. We also recommend extracting
  the Command field from the embedded XML in the event data.
product: windows
service: security
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_defender_update:
  EventID: 4699
  SubjectUserName|endswith: $
  TaskName|contains: \Windows\Windows Defender\
selection:
  EventID:
  - 4699
  - 4701
  TaskName|contains:
  - \Windows\SystemRestore\SR
  - \Windows\Windows Defender\
  - \Windows\BitLocker
  - \Windows\WindowsBackup\
  - \Windows\WindowsUpdate\
  - \Windows\UpdateOrchestrator\Schedule
  - \Windows\ExploitGuard
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4699
- https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-10/security/threat-protection/auditing/event-4701

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-05
- **Rule ID:** `7595ba94-cf3b-4471-aa03-4f6baa9e5fad`
- **Source file:** `windows/builtin/security/win_security_susp_scheduled_task_delete_or_disable.yml`

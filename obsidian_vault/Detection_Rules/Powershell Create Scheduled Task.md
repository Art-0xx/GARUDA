---
type: detection_rule
title: "Powershell Create Scheduled Task"
rule_id: 363eccc0-279a-4ccf-a3ab-24c2e63b11fb
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Powershell Create Scheduled Task

## Description
Adversaries may abuse the Windows Task Scheduler to perform task scheduling for initial or recurring execution of malicious code

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_main_*
filter_main_legitimate_scripts:
  ScriptBlockText|contains|all:
  - Microsoft.PowerShell.Core\Export-ModuleMember
  - Microsoft.Management.Infrastructure.CimInstance
  - __cmdletization_methodParameter
selection_cimmethod:
  ScriptBlockText|contains|all:
  - Invoke-CimMethod
  - -ClassName
  - PS_ScheduledTask
  - -NameSpace
  - Root\Microsoft\Windows\TaskScheduler
selection_cmdlet:
  ScriptBlockText|contains:
  - New-ScheduledTaskAction
  - New-ScheduledTaskTrigger
  - New-ScheduledTaskPrincipal
  - New-ScheduledTaskSettingsSet
  - New-ScheduledTask
  - Register-ScheduledTask
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1053.005/T1053.005.md#atomic-test-4---powershell-cmdlet-scheduled-task
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1053.005/T1053.005.md#atomic-test-6---wmi-invoke-cimmethod-scheduled-task

## Metadata
- **Author:** frack113
- **Date:** 2021-12-28
- **Rule ID:** `363eccc0-279a-4ccf-a3ab-24c2e63b11fb`
- **Source file:** `windows/powershell/powershell_script/posh_ps_cmdlet_scheduled_task.yml`

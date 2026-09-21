---
type: detection_rule
title: "Potential Persistence Via Powershell Search Order Hijacking - Task"
rule_id: b66474aa-bd92-4333-a16c-298155b120df
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1059.001]
---

# Potential Persistence Via Powershell Search Order Hijacking - Task

## Description
Detects suspicious powershell execution via a schedule task where the command ends with an suspicious flags to hide the powershell instance instead of executeing scripts or commands. This could be a sign of persistence via PowerShell "Get-Variable" technique as seen being used in Colibri Loader

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|endswith:
  - ' -windowstyle hidden'
  - ' -w hidden'
  - ' -ep bypass'
  - ' -noni'
  ParentCommandLine|contains|all:
  - -k netsvcs
  - -s Schedule
  ParentImage: C:\WINDOWS\System32\svchost.exe
```

## MITRE ATT&CK
- T1053.005
- T1059.001

## False Positives
- Unknown

## References
- https://blog.malwarebytes.com/threat-intelligence/2022/04/colibri-loader-combines-task-scheduler-and-powershell-in-clever-persistence-technique/

## Metadata
- **Author:** pH-T (Nextron Systems), Florian Roth (Nextron Systems)
- **Date:** 2022-04-08
- **Rule ID:** `b66474aa-bd92-4333-a16c-298155b120df`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_powershell_persistence.yml`

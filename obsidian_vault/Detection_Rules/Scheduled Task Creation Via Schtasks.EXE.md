---
type: detection_rule
title: "Scheduled Task Creation Via Schtasks.EXE"
rule_id: 92626ddd-662c-49e3-ac59-f6535f12d189
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Scheduled Task Creation Via Schtasks.EXE

## Description
Detects the creation of scheduled tasks by user accounts via the "schtasks" utility.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_system_user:
  User|contains:
  - AUTHORI
  - AUTORI
filter_optional_msoffice:
  CommandLine|contains: Microsoft\Office\Office Performance Monitor
  Image:
  - C:\Windows\System32\schtasks.exe
  - C:\Windows\SysWOW64\schtasks.exe
  ParentImage:
  - C:\Program Files\Microsoft Office\root\integration\integrator.exe
  - C:\Program Files (x86)\Microsoft Office\root\integration\integrator.exe
selection:
  CommandLine|contains: ' /create '
  Image|endswith: \schtasks.exe
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Administrative activity
- Software installation

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks-create

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-01-16
- **Rule ID:** `92626ddd-662c-49e3-ac59-f6535f12d189`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_creation.yml`

---
type: detection_rule
title: "Suspicious Modification Of Scheduled Tasks"
rule_id: 1c0e41cd-21bb-4433-9acc-4a2cd6367b9b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Modification Of Scheduled Tasks

## Description
Detects when an attacker tries to modify an already existing scheduled tasks to run from a suspicious location
Attackers can create a simple looking task in order to avoid detection on creation as it's often the most focused on
Instead they modify the task after creation to include their malicious payload

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_schtasks:
  CommandLine|contains|all:
  - ' /Change '
  - ' /TN '
  Image|endswith: \schtasks.exe
selection_susp_images:
  CommandLine|contains:
  - regsvr32
  - rundll32
  - 'cmd /c '
  - 'cmd /k '
  - 'cmd /r '
  - 'cmd.exe /c '
  - 'cmd.exe /k '
  - 'cmd.exe /r '
  - powershell
  - mshta
  - wscript
  - cscript
  - certutil
  - bitsadmin
  - bash.exe
  - 'bash '
  - scrcons
  - 'wmic '
  - wmic.exe
  - forfiles
  - scriptrunner
  - hh.exe
  - 'hh '
selection_susp_locations:
  CommandLine|contains:
  - \AppData\Local\Temp
  - \AppData\Roaming\
  - \Users\Public\
  - \WINDOWS\Temp\
  - \Desktop\
  - \Downloads\
  - \Temporary Internet
  - C:\ProgramData\
  - C:\Perflogs\
  - '%ProgramData%'
  - '%appdata%'
  - '%comspec%'
  - '%localappdata%'
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- Internal Research
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-28
- **Rule ID:** `1c0e41cd-21bb-4433-9acc-4a2cd6367b9b`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_change.yml`

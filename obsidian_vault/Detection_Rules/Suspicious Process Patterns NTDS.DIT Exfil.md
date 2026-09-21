---
type: detection_rule
title: "Suspicious Process Patterns NTDS.DIT Exfil"
rule_id: 8bc64091-6875-4881-aaf9-7bd25b5dda08
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.003]
---

# Suspicious Process Patterns NTDS.DIT Exfil

## Description
Detects suspicious process patterns used in NTDS.DIT exfiltration

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection* or all of set1*
selection_oneliner_1:
  CommandLine|contains|all:
  - ac i ntds
  - create full
selection_onliner_2:
  CommandLine|contains|all:
  - '/c copy '
  - \windows\ntds\ntds.dit
selection_onliner_3:
  CommandLine|contains|all:
  - activate instance ntds
  - create full
selection_powershell:
  CommandLine|contains|all:
  - powershell
  - ntds.dit
selection_tool:
- Image|endswith:
  - \NTDSDump.exe
  - \NTDSDumpEx.exe
- CommandLine|contains|all:
  - ntds.dit
  - system.hiv
- CommandLine|contains: NTDSgrab.ps1
set1_selection_image_folder:
- ParentImage|contains:
  - \apache
  - \tomcat
  - \AppData\
  - \Temp\
  - \Public\
  - \PerfLogs\
- Image|contains:
  - \apache
  - \tomcat
  - \AppData\
  - \Temp\
  - \Public\
  - \PerfLogs\
set1_selection_ntds_dit:
  CommandLine|contains: ntds.dit
```

## MITRE ATT&CK
- T1003.003

## False Positives
- Unknown

## References
- https://www.ired.team/offensive-security/credential-access-and-credential-dumping/ntds.dit-enumeration
- https://www.n00py.io/2022/03/manipulating-user-passwords-without-mimikatz/
- https://pentestlab.blog/tag/ntds-dit/
- https://github.com/samratashok/nishang/blob/414ee1104526d7057f9adaeee196d91ae447283e/Gather/Copy-VSS.ps1
- https://github.com/zcgonvh/NTDSDumpEx

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-11
- **Rule ID:** `8bc64091-6875-4881-aaf9-7bd25b5dda08`
- **Source file:** `windows/process_creation/proc_creation_win_susp_ntds.yml`

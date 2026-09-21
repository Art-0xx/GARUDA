---
type: detection_rule
title: "Suspicious Binary In User Directory Spawned From Office Application"
rule_id: aa3a6f94-890e-4e22-b634-ffdfd54792cc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002]
---

# Suspicious Binary In User Directory Spawned From Office Application

## Description
Detects an executable in the users directory started from one of the Microsoft Office suite applications (Word, Excel, PowerPoint, Publisher, Visio)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|endswith: \Teams.exe
selection:
  Image|endswith: .exe
  Image|startswith: C:\users\
  ParentImage|endswith:
  - \WINWORD.EXE
  - \EXCEL.EXE
  - \POWERPNT.exe
  - \MSPUB.exe
  - \VISIO.exe
  - \MSACCESS.exe
  - \EQNEDT32.exe
```

## MITRE ATT&CK
- T1204.002

## False Positives
- Unknown

## References
- https://blog.morphisec.com/fin7-not-finished-morphisec-spots-new-campaign
- https://www.virustotal.com/gui/file/23160972c6ae07f740800fa28e421a81d7c0ca5d5cab95bc082b4a986fbac57

## Metadata
- **Author:** Jason Lynch
- **Date:** 2019-04-02
- **Rule ID:** `aa3a6f94-890e-4e22-b634-ffdfd54792cc`
- **Source file:** `windows/process_creation/proc_creation_win_office_spawn_exe_from_users_directory.yml`

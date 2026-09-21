---
type: detection_rule
title: "Tasks Folder Evasion"
rule_id: cc4e02ba-9c06-48e2-b09e-2500cace9ae0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Tasks Folder Evasion

## Description
The Tasks folder in system32 and syswow64 are globally writable paths.
Adversaries can take advantage of this and load or influence any script hosts or ANY .NET Application
in Tasks to load and execute a custom assembly into cscript, wscript, regsvr32, mshta, eventvwr

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection1:
  CommandLine|contains:
  - 'echo '
  - 'copy '
  - 'type '
  - file createnew
selection2:
  CommandLine|contains:
  - ' C:\Windows\System32\Tasks\'
  - ' C:\Windows\SysWow64\Tasks\'
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://twitter.com/subTee/status/1216465628946563073
- https://gist.github.com/am0nsec/8378da08f848424e4ab0cc5b317fdd26

## Metadata
- **Author:** Sreeman
- **Date:** 2020-01-13
- **Rule ID:** `cc4e02ba-9c06-48e2-b09e-2500cace9ae0`
- **Source file:** `windows/process_creation/proc_creation_win_susp_task_folder_evasion.yml`

---
type: detection_rule
title: "PowerShell Script Run in AppData"
rule_id: ac175779-025a-4f12-98b0-acdaeb77ea85
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell Script Run in AppData

## Description
Detects a suspicious command line execution that invokes PowerShell with reference to an AppData folder

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
  - powershell.exe
  - \powershell
  - \pwsh
  - pwsh.exe
selection2:
  CommandLine|contains:
  - Local\
  - Roaming\
  CommandLine|contains|all:
  - '/c '
  - \AppData\
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Administrative scripts

## References
- https://twitter.com/JohnLaTwC/status/1082851155481288706
- https://app.any.run/tasks/f87f1c4e-47e2-4c46-9cf4-31454c06ce03

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community
- **Date:** 2019-01-09
- **Rule ID:** `ac175779-025a-4f12-98b0-acdaeb77ea85`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_susp_ps_appdata.yml`

---
type: detection_rule
title: "HackTool - Default PowerSploit/Empire Scheduled Task Creation"
rule_id: 56c217c3-2de2-479b-990f-5c109ba8458f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1059.001]
---

# HackTool - Default PowerSploit/Empire Scheduled Task Creation

## Description
Detects the creation of a schtask via PowerSploit or Empire Default Configuration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - /SC ONLOGON
  - /SC DAILY /ST
  - /SC ONIDLE
  - /SC HOURLY
  CommandLine|contains|all:
  - /Create
  - powershell.exe -NonI
  - /TN Updater /TR
  Image|endswith: \schtasks.exe
  ParentImage|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1053.005
- T1059.001

## False Positives
- Unlikely

## References
- https://github.com/0xdeadbeefJERKY/PowerSploit/blob/8690399ef70d2cad10213575ac67e8fa90ddf7c3/Persistence/Persistence.psm1
- https://github.com/EmpireProject/Empire/blob/08cbd274bef78243d7a8ed6443b8364acd1fc48b/lib/modules/powershell/persistence/userland/schtasks.py

## Metadata
- **Author:** Markus Neis, @Karneades
- **Date:** 2018-03-06
- **Rule ID:** `56c217c3-2de2-479b-990f-5c109ba8458f`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_powersploit_empire_default_schtasks.yml`

---
type: detection_rule
title: "Abused Debug Privilege by Arbitrary Parent Processes"
rule_id: d522eca2-2973-4391-a3e0-ef0374321dae
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548]
---

# Abused Debug Privilege by Arbitrary Parent Processes

## Description
Detection of unusual child processes by different system processes

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not filter
filter:
  CommandLine|contains|all:
  - ' route '
  - ' ADD '
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \cmd.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
  - Cmd.Exe
selection_parent:
  ParentImage|endswith:
  - \winlogon.exe
  - \services.exe
  - \lsass.exe
  - \csrss.exe
  - \smss.exe
  - \wininit.exe
  - \spoolsv.exe
  - \searchindexer.exe
  User|contains:
  - AUTHORI
  - AUTORI
```

## MITRE ATT&CK
- T1548

## False Positives
- Unknown

## References
- https://image.slidesharecdn.com/kheirkhabarovoffzonefinal-181117201458/95/hunting-for-privilege-escalation-in-windows-environment-74-638.jpg

## Metadata
- **Author:** Semanur Guneysu @semanurtg, oscd.community
- **Date:** 2020-10-28
- **Rule ID:** `d522eca2-2973-4391-a3e0-ef0374321dae`
- **Source file:** `windows/process_creation/proc_creation_win_susp_abusing_debug_privilege.yml`

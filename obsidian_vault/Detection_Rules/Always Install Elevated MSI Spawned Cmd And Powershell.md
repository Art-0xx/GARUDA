---
type: detection_rule
title: "Always Install Elevated MSI Spawned Cmd And Powershell"
rule_id: 1e53dd56-8d83-4eb4-a43e-b790a05510aa
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Always Install Elevated MSI Spawned Cmd And Powershell

## Description
Detects Windows Installer service (msiexec.exe) spawning "cmd" or "powershell"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - Cmd.Exe
  - PowerShell.EXE
  - pwsh.dll
selection_parent:
  ParentImage|contains|all:
  - \Windows\Installer\
  - msi
  ParentImage|endswith: tmp
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://image.slidesharecdn.com/kheirkhabarovoffzonefinal-181117201458/95/hunting-for-privilege-escalation-in-windows-environment-50-638.jpg

## Metadata
- **Author:** Teymur Kheirkhabarov (idea), Mangatas Tondang (rule), oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `1e53dd56-8d83-4eb4-a43e-b790a05510aa`
- **Source file:** `windows/process_creation/proc_creation_win_susp_elavated_msi_spawned_shell.yml`

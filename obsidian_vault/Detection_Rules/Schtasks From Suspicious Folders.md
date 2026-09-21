---
type: detection_rule
title: "Schtasks From Suspicious Folders"
rule_id: 8a8379b8-780b-4dbf-b1e9-31c8d112fefb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Schtasks From Suspicious Folders

## Description
Detects scheduled task creations that have suspicious action command and folder combinations

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_all_folders:
  CommandLine|contains:
  - C:\ProgramData\
  - '%ProgramData%'
selection_command:
  CommandLine|contains:
  - powershell
  - pwsh
  - 'cmd /c '
  - 'cmd /k '
  - 'cmd /r '
  - 'cmd.exe /c '
  - 'cmd.exe /k '
  - 'cmd.exe /r '
selection_create:
  CommandLine|contains: ' /create '
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/lazarus-dream-job-chemical

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-04-15
- **Rule ID:** `8a8379b8-780b-4dbf-b1e9-31c8d112fefb`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_folder_combos.yml`

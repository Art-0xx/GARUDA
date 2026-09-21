---
type: detection_rule
title: "Suspicious Provlaunch.EXE Child Process"
rule_id: f9999590-1f94-4a34-a91e-951e47bedefd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Suspicious Provlaunch.EXE Child Process

## Description
Detects suspicious child processes of "provlaunch.exe" which might indicate potential abuse to proxy execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- Image|endswith:
  - \calc.exe
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \notepad.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- Image|contains:
  - :\PerfLogs\
  - :\Temp\
  - :\Users\Public\
  - \AppData\Temp\
  - \Windows\System32\Tasks\
  - \Windows\Tasks\
  - \Windows\Temp\
selection_parent:
  ParentImage|endswith: \provlaunch.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Provlaunch/
- https://twitter.com/0gtweet/status/1674399582162153472

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-08
- **Rule ID:** `f9999590-1f94-4a34-a91e-951e47bedefd`
- **Source file:** `windows/process_creation/proc_creation_win_provlaunch_susp_child_process.yml`

---
type: detection_rule
title: "WSL Child Process Anomaly"
rule_id: 2267fe65-0681-42ad-9a6d-46553d3f3480
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1202]
---

# WSL Child Process Anomaly

## Description
Detects uncommon or suspicious child processes spawning from a WSL process. This could indicate an attempt to evade parent/child relationship detections or persistence attempts via cron using WSL

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_children_*
selection_children_images:
  Image|endswith:
  - \calc.exe
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
selection_children_paths:
  Image|contains:
  - \AppData\Local\Temp\
  - C:\Users\Public\
  - C:\Windows\Temp\
  - C:\Temp\
  - \Downloads\
  - \Desktop\
selection_parent:
  ParentImage|endswith:
  - \wsl.exe
  - \wslhost.exe
```

## MITRE ATT&CK
- T1218
- T1202

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Wsl/
- https://twitter.com/nas_bench/status/1535431474429808642

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-23
- **Rule ID:** `2267fe65-0681-42ad-9a6d-46553d3f3480`
- **Source file:** `windows/process_creation/proc_creation_win_wsl_child_processes_anomalies.yml`

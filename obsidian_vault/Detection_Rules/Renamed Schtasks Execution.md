---
type: detection_rule
title: "Renamed Schtasks Execution"
rule_id: f91e51c9-f344-4b32-969b-0b6f6b8537d4
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003, attack.t1053.005]
---

# Renamed Schtasks Execution

## Description
Detects the execution of renamed schtasks.exe binary, which is a legitimate Windows utility used for scheduling tasks.
One of the very common persistence techniques is schedule malicious tasks using schtasks.exe.
Since, it is heavily abused, it is also heavily monitored by security products. To evade detection, threat actors may rename the schtasks.exe binary to schedule their malicious tasks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (all of selection_cmd_* and not filter_main_cmd) or (selection_pe and not
  filter_main_img)
filter_main_cmd:
  CommandLine|contains: schtasks
filter_main_img:
  Image|endswith: \schtasks.exe
selection_cmd_flags:
  CommandLine|contains|windash:
  - ' /tn '
  - ' /tr '
  - ' /sc '
  - ' /st '
  - ' /ru '
  - ' /fo '
selection_cmd_operation:
  CommandLine|contains|windash:
  - ' /create '
  - ' /delete '
  - ' /query '
  - ' /change '
  - ' /run '
  - ' /end '
selection_pe:
  OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1036.003
- T1053.005

## False Positives
- Unlikely

## References
- https://x.com/JangPr0/status/1932034543026065833
- https://ss64.com/nt/schtasks.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-27
- **Rule ID:** `f91e51c9-f344-4b32-969b-0b6f6b8537d4`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_schtasks_execution.yml`

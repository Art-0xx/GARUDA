---
type: detection_rule
title: "Scheduled Task Creation Masquerading as System Processes"
rule_id: 9f8573c9-22b4-40e3-89c1-72bc2b8d49ab
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1036.004, attack.t1036.005]
---

# Scheduled Task Creation Masquerading as System Processes

## Description
Detects the creation of scheduled tasks that involve system processes, which may indicate malicious actors masquerading as or abusing these processes to execute payloads or maintain persistence.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' audiodg'
  - ' conhost'
  - ' dwm.exe'
  - ' explorer'
  - ' lsass'
  - ' lsm'
  - ' mmc'
  - ' msiexec'
  - ' regsvr32'
  - ' rundll32'
  - ' services'
  - ' spoolsv'
  - ' svchost'
  - ' taskeng'
  - ' taskhost'
  - ' wininit'
  - ' winlogon'
  CommandLine|contains|windash: ' /create '
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1053.005
- T1036.004
- T1036.005

## False Positives
- Legitimate system administration tasks scheduling trusted system processes.

## References
- https://tria.ge/241015-l98snsyeje/behavioral2

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-02-05
- **Rule ID:** `9f8573c9-22b4-40e3-89c1-72bc2b8d49ab`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_system_process.yml`

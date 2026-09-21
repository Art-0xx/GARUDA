---
type: detection_rule
title: "Potential Process Reconnaissance via Wmic.EXE"
rule_id: 221b251a-357a-49a9-920a-271802777cc0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1057]
---

# Potential Process Reconnaissance via Wmic.EXE

## Description
Detects the execution of "wmic" with the "process" flag, which might indicate an attempt to perform reconnaissance on running processes.
Adversaries may use wmic to query for running processes and their details as part of their reconnaissance efforts.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection* and not 1 of filter_main_*
filter_main_creation:
  CommandLine|contains|all:
  - call
  - create
filter_main_terminate:
  CommandLine|contains|all:
  - call
  - terminate
selection_cli:
  CommandLine|contains: process
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047
- T1057

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1047/T1047.md
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wmic

## Metadata
- **Author:** frack113
- **Date:** 2022-01-01
- **Rule ID:** `221b251a-357a-49a9-920a-271802777cc0`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_process.yml`

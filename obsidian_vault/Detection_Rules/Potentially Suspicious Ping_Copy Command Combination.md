---
type: detection_rule
title: "Potentially Suspicious Ping/Copy Command Combination"
rule_id: ded2b07a-d12f-4284-9b76-653e37b6c8b0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.004]
---

# Potentially Suspicious Ping/Copy Command Combination

## Description
Detects uncommon and potentially suspicious one-liner command containing both "ping" and "copy" at the same time, which is usually used by malware.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_action:
  CommandLine|contains|all:
  - ping
  - 'copy '
selection_cli_1:
  CommandLine|contains|windash: ' -n '
selection_cli_2:
  CommandLine|contains|windash: ' -y '
selection_cmd:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
```

## MITRE ATT&CK
- T1070.004

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-07-18
- **Rule ID:** `ded2b07a-d12f-4284-9b76-653e37b6c8b0`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_ping_copy_combined_execution.yml`

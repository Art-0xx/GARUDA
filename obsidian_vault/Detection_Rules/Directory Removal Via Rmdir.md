---
type: detection_rule
title: "Directory Removal Via Rmdir"
rule_id: 41ca393d-538c-408a-ac27-cf1e038be80c
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.004]
---

# Directory Removal Via Rmdir

## Description
Detects execution of the builtin "rmdir" command in order to delete directories.
Adversaries may delete files left behind by the actions of their intrusion activity.
Malware, tools, or other non-native files dropped or created on a system by an adversary may leave traces to indicate to what was done within a network and how.
Removal of these files can occur during an intrusion, or as part of a post-intrusion process to minimize the adversary's footprint.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flags:
  CommandLine|contains:
  - /s
  - /q
selection_img:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
selection_rmdir:
  CommandLine|contains: rmdir
```

## MITRE ATT&CK
- T1070.004

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.004/T1070.004.md
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/erase

## Metadata
- **Author:** frack113
- **Date:** 2022-01-15
- **Rule ID:** `41ca393d-538c-408a-ac27-cf1e038be80c`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_rmdir_execution.yml`

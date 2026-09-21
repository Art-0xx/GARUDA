---
type: detection_rule
title: "RunMRU Registry Key Deletion"
rule_id: c11aecef-9c37-45a6-9c07-bc0782f963fd
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070.003]
---

# RunMRU Registry Key Deletion

## Description
Detects deletion of the RunMRU registry key, which stores the history of commands executed via the Run dialog.
In the clickfix techniques, the phishing lures instruct users to open a run dialog through (Win + R) and execute malicious commands.
Adversaries may delete this key to cover their tracks after executing commands.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ' del'
  - \Software\Microsoft\Windows\CurrentVersion\Explorer\RunMRU
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1070.003

## False Positives
- Unknown

## References
- https://www.zscaler.com/blogs/security-research/coldriver-updates-arsenal-baitswitch-and-simplefix

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-09-25
- **Rule ID:** `c11aecef-9c37-45a6-9c07-bc0782f963fd`
- **Source file:** `windows/process_creation/proc_creation_win_reg_delete_runmru.yml`

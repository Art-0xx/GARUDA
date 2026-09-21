---
type: detection_rule
title: "History File Deletion"
rule_id: 1182f3b3-e716-4efa-99ab-d2685d04360f
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1565.001]
---

# History File Deletion

## Description
Detects events in which a history file gets deleted, e.g. the ~/bash_history to remove traces of malicious activity

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  Image|endswith:
  - /rm
  - /unlink
  - /shred
selection_history:
- CommandLine|contains:
  - /.bash_history
  - /.zsh_history
- CommandLine|endswith:
  - _history
  - .history
  - zhistory
```

## MITRE ATT&CK
- T1565.001

## False Positives
- Legitimate administration activities

## References
- https://github.com/sleventyeleven/linuxprivchecker/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.003/T1552.003.md

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `1182f3b3-e716-4efa-99ab-d2685d04360f`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_history_delete.yml`

---
type: detection_rule
title: "Print History File Contents"
rule_id: d7821ff1-4527-4e33-9f84-d0d57fa2fb66
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1592.004]
---

# Print History File Contents

## Description
Detects events in which someone prints the contents of history files to the commandline or redirects it to a file for reconnaissance

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
  - /cat
  - /head
  - /tail
  - /more
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
- T1592.004

## False Positives
- Legitimate administration activities

## References
- https://github.com/sleventyeleven/linuxprivchecker/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.003/T1552.003.md

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `d7821ff1-4527-4e33-9f84-d0d57fa2fb66`
- **Source file:** `linux/process_creation/proc_creation_lnx_susp_history_recon.yml`

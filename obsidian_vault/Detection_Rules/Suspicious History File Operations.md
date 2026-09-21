---
type: detection_rule
title: "Suspicious History File Operations"
rule_id: 508a9374-ad52-4789-b568-fc358def2c65
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1552.003]
---

# Suspicious History File Operations

## Description
Detects commandline operations on shell history files

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - .bash_history
  - .zsh_history
  - .zhistory
  - .history
  - .sh_history
  - fish_history
```

## MITRE ATT&CK
- T1552.003

## False Positives
- Legitimate administrative activity
- Legitimate software, cleaning hist file

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.003/T1552.003.md

## Metadata
- **Author:** Mikhail Larin, oscd.community
- **Date:** 2020-10-17
- **Rule ID:** `508a9374-ad52-4789-b568-fc358def2c65`
- **Source file:** `macos/process_creation/proc_creation_macos_susp_histfile_operations.yml`

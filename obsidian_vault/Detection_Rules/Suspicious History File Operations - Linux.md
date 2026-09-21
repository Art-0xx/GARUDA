---
type: detection_rule
title: "Suspicious History File Operations - Linux"
rule_id: eae8ce9f-bde9-47a6-8e79-f20d18419910
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1552.003]
---

# Suspicious History File Operations - Linux

## Description
Detects commandline operations on shell history files

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: execve and history
execve:
  type: EXECVE
history:
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
- **Rule ID:** `eae8ce9f-bde9-47a6-8e79-f20d18419910`
- **Source file:** `linux/auditd/execve/lnx_auditd_susp_histfile_operations.yml`

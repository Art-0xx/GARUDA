---
type: detection_rule
title: "Hidden Files and Directories"
rule_id: d08722cd-3d09-449a-80b4-83ea2d9d4616
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1564.001]
---

# Hidden Files and Directories

## Description
Detects adversary creating hidden file or directory, by detecting directories or files with . as the first character

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: all of selection_*
selection_arguments:
- a1|re: (^|\/)\.[^.\/]
- a2|re: (^|\/)\.[^.\/]
selection_commands:
  a0:
  - mkdir
  - nano
  - touch
  - vi
  - vim
  type: EXECVE
```

## MITRE ATT&CK
- T1564.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1564.001/T1564.001.md

## Metadata
- **Author:** Pawel Mazur
- **Date:** 2021-09-06
- **Rule ID:** `d08722cd-3d09-449a-80b4-83ea2d9d4616`
- **Source file:** `linux/auditd/execve/lnx_auditd_hidden_files_directories.yml`

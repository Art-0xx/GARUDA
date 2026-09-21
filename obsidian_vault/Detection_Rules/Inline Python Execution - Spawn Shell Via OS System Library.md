---
type: detection_rule
title: "Inline Python Execution - Spawn Shell Via OS System Library"
rule_id: 2d2f44ff-4611-4778-a8fc-323a0e9850cc
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Inline Python Execution - Spawn Shell Via OS System Library

## Description
Detects execution of inline Python code via the "-c" in order to call the "system" function from the "os" library, and spawn a shell.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - /bin/bash
  - /bin/dash
  - /bin/fish
  - /bin/sh
  - /bin/zsh
  CommandLine|contains|all:
  - ' -c '
  - os.system(
selection_img:
- Image|endswith:
  - /python
  - /python2
  - /python3
- Image|contains:
  - /python2.
  - /python3.
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/python/#shell

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `2d2f44ff-4611-4778-a8fc-323a0e9850cc`
- **Source file:** `linux/process_creation/proc_creation_lnx_python_shell_os_system.yml`

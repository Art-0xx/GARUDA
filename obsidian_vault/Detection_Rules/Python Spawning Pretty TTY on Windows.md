---
type: detection_rule
title: "Python Spawning Pretty TTY on Windows"
rule_id: 480e7e51-e797-47e3-8d72-ebfce65b6d8d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Python Spawning Pretty TTY on Windows

## Description
Detects python spawning a pretty tty

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_cli_*
selection_cli_1:
  CommandLine|contains|all:
  - import pty
  - .spawn(
selection_cli_2:
  CommandLine|contains: from pty import spawn
selection_img:
  Image|endswith:
  - python.exe
  - python3.exe
  - python2.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://www.volexity.com/blog/2022/06/02/zero-day-exploitation-of-atlassian-confluence/

## Metadata
- **Author:** Nextron Systems
- **Date:** 2022-06-03
- **Rule ID:** `480e7e51-e797-47e3-8d72-ebfce65b6d8d`
- **Source file:** `windows/process_creation/proc_creation_win_python_pty_spawn.yml`

---
type: detection_rule
title: "Python Spawning Pretty TTY Via PTY Module"
rule_id: c4042d54-110d-45dd-a0e1-05c47822c937
platform: linux
level: medium
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Python Spawning Pretty TTY Via PTY Module

## Description
Detects a python process calling to the PTY module in order to spawn a pretty tty which could be indicative of potential reverse shell activity.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_import:
  CommandLine|contains:
  - import pty
  - 'from pty '
selection_cli_spawn:
  CommandLine|contains: spawn
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
- https://www.volexity.com/blog/2022/06/02/zero-day-exploitation-of-atlassian-confluence/

## Metadata
- **Author:** Nextron Systems
- **Date:** 2022-06-03
- **Rule ID:** `c4042d54-110d-45dd-a0e1-05c47822c937`
- **Source file:** `linux/process_creation/proc_creation_lnx_python_pty_spawn.yml`

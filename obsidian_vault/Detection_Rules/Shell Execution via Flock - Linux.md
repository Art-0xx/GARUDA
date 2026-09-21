---
type: detection_rule
title: "Shell Execution via Flock - Linux"
rule_id: 4b09c71e-4269-4111-9cdd-107d8867f0cc
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083]
---

# Shell Execution via Flock - Linux

## Description
Detects the use of the "flock" command to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

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
selection_img:
  CommandLine|contains: ' -u '
  Image|endswith: /flock
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/flock/#shell
- https://www.elastic.co/guide/en/security/current/linux-restricted-shell-breakout-via-linux-binary-s.html

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `4b09c71e-4269-4111-9cdd-107d8867f0cc`
- **Source file:** `linux/process_creation/proc_creation_lnx_flock_shell_execution.yml`

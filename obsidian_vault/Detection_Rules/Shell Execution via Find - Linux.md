---
type: detection_rule
title: "Shell Execution via Find - Linux"
rule_id: 6adfbf8f-52be-4444-9bac-81b539624146
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083]
---

# Shell Execution via Find - Linux

## Description
Detects the use of the find command to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or exploitation attempt.

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
  CommandLine|contains|all:
  - ' . '
  - -exec
  Image|endswith: /find
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/find/#shell
- https://www.elastic.co/guide/en/security/current/linux-restricted-shell-breakout-via-linux-binary-s.html

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `6adfbf8f-52be-4444-9bac-81b539624146`
- **Source file:** `linux/process_creation/proc_creation_lnx_find_shell_execution.yml`

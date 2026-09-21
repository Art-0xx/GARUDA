---
type: detection_rule
title: "Shell Invocation Via Ssh - Linux"
rule_id: 8737b7f6-8df3-4bb7-b1da-06019b99b687
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Shell Invocation Via Ssh - Linux

## Description
Detects the use of the "ssh" utility to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

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
  - sh 0<&2 1>&2
  - sh 1>&2 0<&2
selection_img:
  CommandLine|contains:
  - ProxyCommand=;
  - permitlocalcommand=yes
  - localhost
  Image|endswith: /ssh
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/ssh/
- https://www.elastic.co/guide/en/security/current/linux-restricted-shell-breakout-via-linux-binary-s.html

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-08-29
- **Rule ID:** `8737b7f6-8df3-4bb7-b1da-06019b99b687`
- **Source file:** `linux/process_creation/proc_creation_lnx_ssh_shell_execution.yml`

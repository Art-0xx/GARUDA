---
type: detection_rule
title: "Shell Invocation via Env Command - Linux"
rule_id: bed978f8-7f3a-432b-82c5-9286a9b3031a
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059.004]
---

# Shell Invocation via Env Command - Linux

## Description
Detects the use of the env command to invoke a shell. This may indicate an attempt to bypass restricted environments, escalate privileges, or execute arbitrary commands.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - /bin/bash
  - /bin/dash
  - /bin/fish
  - /bin/sh
  - /bin/zsh
  Image|endswith: /env
```

## MITRE ATT&CK
- T1059.004

## False Positives
- Github operations such as ghe-backup

## References
- https://gtfobins.github.io/gtfobins/env/#shell
- https://www.elastic.co/guide/en/security/current/linux-restricted-shell-breakout-via-linux-binary-s.html

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `bed978f8-7f3a-432b-82c5-9286a9b3031a`
- **Source file:** `linux/process_creation/proc_creation_lnx_env_shell_invocation.yml`

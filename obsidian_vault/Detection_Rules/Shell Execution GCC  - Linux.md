---
type: detection_rule
title: "Shell Execution GCC  - Linux"
rule_id: 9b5de532-a757-4d70-946c-1f3e44f48b4d
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083]
---

# Shell Execution GCC  - Linux

## Description
Detects the use of the "gcc" utility to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

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
  - /bin/bash,-s
  - /bin/dash,-s
  - /bin/fish,-s
  - /bin/sh,-s
  - /bin/zsh,-s
selection_img:
  CommandLine|contains: -wrapper
  Image|endswith:
  - /c89
  - /c99
  - /gcc
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/gcc/#shell
- https://gtfobins.github.io/gtfobins/c89/#shell
- https://gtfobins.github.io/gtfobins/c99/#shell
- https://www.elastic.co/guide/en/security/current/linux-restricted-shell-breakout-via-linux-binary-s.html

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `9b5de532-a757-4d70-946c-1f3e44f48b4d`
- **Source file:** `linux/process_creation/proc_creation_lnx_gcc_shell_execution.yml`

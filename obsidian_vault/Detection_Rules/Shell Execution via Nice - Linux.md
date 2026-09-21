---
type: detection_rule
title: "Shell Execution via Nice - Linux"
rule_id: 093d68c7-762a-42f4-9f46-95e79142571a
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1083]
---

# Shell Execution via Nice - Linux

## Description
Detects the use of the "nice" utility to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|endswith:
  - /bin/bash
  - /bin/dash
  - /bin/fish
  - /bin/sh
  - /bin/zsh
  Image|endswith: /nice
```

## MITRE ATT&CK
- T1083

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/nice/#shell
- https://www.elastic.co/guide/en/security/current/linux-restricted-shell-breakout-via-linux-binary-s.html

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `093d68c7-762a-42f4-9f46-95e79142571a`
- **Source file:** `linux/process_creation/proc_creation_lnx_nice_shell_execution.yml`

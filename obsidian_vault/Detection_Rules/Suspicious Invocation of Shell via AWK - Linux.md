---
type: detection_rule
title: "Suspicious Invocation of Shell via AWK - Linux"
rule_id: 8c1a5675-cb85-452f-a298-b01b22a51856
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Suspicious Invocation of Shell via AWK - Linux

## Description
Detects the execution of "awk" or it's sibling commands, to invoke a shell using the system() function.
This behavior is commonly associated with attempts to execute arbitrary commands or escalate privileges, potentially leading to unauthorized access or further exploitation.

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
  CommandLine|contains: BEGIN {system
  Image|endswith:
  - /awk
  - /gawk
  - /mawk
  - /nawk
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/awk/#shell
- https://gtfobins.github.io/gtfobins/gawk/#shell
- https://gtfobins.github.io/gtfobins/nawk/#shell
- https://gtfobins.github.io/gtfobins/mawk/#shell

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `8c1a5675-cb85-452f-a298-b01b22a51856`
- **Source file:** `linux/process_creation/proc_creation_lnx_awk_shell_spawn.yml`

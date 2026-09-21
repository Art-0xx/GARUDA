---
type: detection_rule
title: "Shell Execution via Git - Linux"
rule_id: 47b3bbd4-1bf7-48cc-84ab-995362aaa75a
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Shell Execution via Git - Linux

## Description
Detects the use of the "git" utility to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

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
  - bash 0<&1
  - dash 0<&1
  - sh 0<&1
  ParentCommandLine|contains|all:
  - ' -p '
  - help
  ParentImage|endswith: /git
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/git/#shell

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.)
- **Date:** 2024-09-02
- **Rule ID:** `47b3bbd4-1bf7-48cc-84ab-995362aaa75a`
- **Source file:** `linux/process_creation/proc_creation_lnx_git_shell_execution.yml`

---
type: detection_rule
title: "Shell Execution via Rsync - Linux"
rule_id: e2326866-609f-4015-aea9-7ec634e8aa04
platform: linux
level: high
status: experimental
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Shell Execution via Rsync - Linux

## Description
Detects the use of the "rsync" utility to execute a shell. Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

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
  - '/ash '
  - '/bash '
  - '/dash '
  - '/csh '
  - '/sh '
  - '/zsh '
  - '/tcsh '
  - '/ksh '
  - '''ash '
  - '''bash '
  - '''dash '
  - '''csh '
  - '''sh '
  - '''zsh '
  - '''tcsh '
  - '''ksh '
selection_img:
  CommandLine|contains: ' -e '
  Image|endswith:
  - /rsync
  - /rsyncd
```

## MITRE ATT&CK
- T1059

## False Positives
- Legitimate cases in which "rsync" is used to execute a shell

## References
- https://gtfobins.github.io/gtfobins/rsync/#shell

## Metadata
- **Author:** Li Ling, Andy Parkidomo, Robert Rakowski, Blake Hartstein (Bloomberg L.P.), Florian Roth
- **Date:** 2024-09-02
- **Rule ID:** `e2326866-609f-4015-aea9-7ec634e8aa04`
- **Source file:** `linux/process_creation/proc_creation_lnx_rsync_shell_execution.yml`

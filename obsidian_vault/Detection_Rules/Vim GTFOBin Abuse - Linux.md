---
type: detection_rule
title: "Vim GTFOBin Abuse - Linux"
rule_id: 7ab8f73a-fcff-428b-84aa-6a5ff7877dea
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059, attack.t1083]
---

# Vim GTFOBin Abuse - Linux

## Description
Detects the use of "vim" and it's siblings commands to execute a shell or proxy commands.
Such behavior may be associated with privilege escalation, unauthorized command execution, or to break out from restricted environments.

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
  - :!/
  - :!$
  - :!..
  - ':lua '
  - ':py '
  - :shell
  - /bin/bash
  - /bin/dash
  - /bin/fish
  - /bin/sh
  - /bin/csh
  - /bin/ksh
  - /bin/zsh
  - /bin/tmux
selection_img:
  CommandLine|contains:
  - ' --cmd '
  - ' -c'
  Image|endswith:
  - /rvim
  - /vi
  - /vim
  - /vimdiff
```

## MITRE ATT&CK
- T1059
- T1083

## False Positives
- Unknown

## References
- https://gtfobins.github.io/gtfobins/vi/
- https://gtfobins.github.io/gtfobins/vim/
- https://gtfobins.github.io/gtfobins/rvim/
- https://gtfobins.github.io/gtfobins/vimdiff/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Luc Génaux
- **Date:** 2022-12-28
- **Rule ID:** `7ab8f73a-fcff-428b-84aa-6a5ff7877dea`
- **Source file:** `linux/process_creation/proc_creation_lnx_vim_shell_execution.yml`

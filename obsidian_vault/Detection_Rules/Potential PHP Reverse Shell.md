---
type: detection_rule
title: "Potential PHP Reverse Shell"
rule_id: c6714a24-d7d5-4283-a36b-3ffd091d5f7e
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
---

# Potential PHP Reverse Shell

## Description
Detects usage of the PHP CLI with the "-r" flag which allows it to run inline PHP code. The rule looks for calls to the "fsockopen" function which allows the creation of sockets.
Attackers often leverage this in combination with functions such as "exec" or "fopen" to initiate a reverse shell connection.

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
  - ash
  - bash
  - bsh
  - csh
  - ksh
  - pdksh
  - sh
  - tcsh
  - zsh
  CommandLine|contains|all:
  - ' -r '
  - fsockopen
  Image|contains: /php
```

## False Positives
- Unknown

## References
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet
- https://www.revshells.com/

## Metadata
- **Author:** @d4ns4n_
- **Date:** 2023-04-07
- **Rule ID:** `c6714a24-d7d5-4283-a36b-3ffd091d5f7e`
- **Source file:** `linux/process_creation/proc_creation_lnx_php_reverse_shell.yml`

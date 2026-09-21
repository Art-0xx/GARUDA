---
type: detection_rule
title: "Bash Interactive Shell"
rule_id: 6104e693-a7d6-4891-86cb-49a258523559
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
---

# Bash Interactive Shell

## Description
Detects execution of the bash shell with the interactive flag "-i".

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' -i '
  Image|endswith: /bash
```

## False Positives
- Unknown

## References
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet
- https://www.revshells.com/
- https://linux.die.net/man/1/bash

## Metadata
- **Author:** @d4ns4n_
- **Date:** 2023-04-07
- **Rule ID:** `6104e693-a7d6-4891-86cb-49a258523559`
- **Source file:** `linux/process_creation/proc_creation_lnx_bash_interactive_shell.yml`

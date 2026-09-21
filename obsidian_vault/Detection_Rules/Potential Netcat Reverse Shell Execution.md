---
type: detection_rule
title: "Potential Netcat Reverse Shell Execution"
rule_id: 7f734ed0-4f47-46c0-837f-6ee62505abd9
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1059]
---

# Potential Netcat Reverse Shell Execution

## Description
Detects execution of netcat with the "-e" flag followed by common shells. This could be a sign of a potential reverse shell setup.

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flags:
  CommandLine|contains:
  - ' -c '
  - ' -e '
selection_nc:
  Image|endswith:
  - /nc
  - /ncat
selection_shell:
  CommandLine|contains:
  - ' ash'
  - ' bash'
  - ' bsh'
  - ' csh'
  - ' ksh'
  - ' pdksh'
  - ' sh'
  - ' tcsh'
  - /bin/ash
  - /bin/bash
  - /bin/bsh
  - /bin/csh
  - /bin/ksh
  - /bin/pdksh
  - /bin/sh
  - /bin/tcsh
  - /bin/zsh
  - $IFSash
  - $IFSbash
  - $IFSbsh
  - $IFScsh
  - $IFSksh
  - $IFSpdksh
  - $IFSsh
  - $IFStcsh
  - $IFSzsh
```

## MITRE ATT&CK
- T1059

## False Positives
- Unlikely

## References
- https://pentestmonkey.net/cheat-sheet/shells/reverse-shell-cheat-sheet
- https://www.revshells.com/
- https://www.hackingtutorials.org/networking/hacking-netcat-part-2-bind-reverse-shells/
- https://www.infosecademy.com/netcat-reverse-shells/
- https://man7.org/linux/man-pages/man1/ncat.1.html

## Metadata
- **Author:** @d4ns4n_, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-07
- **Rule ID:** `7f734ed0-4f47-46c0-837f-6ee62505abd9`
- **Source file:** `linux/process_creation/proc_creation_lnx_netcat_reverse_shell.yml`

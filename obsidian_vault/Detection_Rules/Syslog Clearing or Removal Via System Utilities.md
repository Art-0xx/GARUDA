---
type: detection_rule
title: "Syslog Clearing or Removal Via System Utilities"
rule_id: 3fcc9b35-39e4-44c0-a2ad-9e82b6902b31
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1685.006]
---

# Syslog Clearing or Removal Via System Utilities

## Description
Detects specific commands commonly used to remove or empty the syslog. Which is a technique often used by attacker as a method to hide their tracks

## Log Source
```yaml
category: process_creation
product: linux
```

## Detection Logic
```yaml
condition: (selection_file and 1 of selection_command_*) or 1 of selection_unique_*
selection_command_cp:
  CommandLine|contains: /dev/null
  Image|endswith: /cp
selection_command_ln:
  CommandLine|contains:
  - '-sf '
  - '-sfn '
  - '-sfT '
  CommandLine|contains|all:
  - '/dev/null '
  - /var/log/syslog
  Image|endswith: /ln
selection_command_mv:
  Image|endswith: /mv
selection_command_rm:
  CommandLine|contains:
  - ' -r '
  - ' -f '
  - ' -rf '
  - /var/log/syslog
  Image|endswith: /rm
selection_command_shred:
  CommandLine|contains: '-u '
  Image|endswith: /shred
selection_command_truncate:
  CommandLine|contains:
  - '-s '
  - '-c '
  - --size
  CommandLine|contains|all:
  - '0 '
  - /var/log/syslog
  Image|endswith: /truncate
selection_command_unlink:
  Image|endswith: /unlink
selection_file:
  CommandLine|contains: /var/log/syslog
selection_unique_journalctl:
  CommandLine|contains:
  - journalctl --vacuum
  - journalctl --rotate
selection_unique_other:
  CommandLine|contains:
  - ' > /var/log/syslog'
  - ' >/var/log/syslog'
  - ' >| /var/log/syslog'
  - ': > /var/log/syslog'
  - :> /var/log/syslog
  - :>/var/log/syslog
  - '>|/var/log/syslog'
```

## MITRE ATT&CK
- T1685.006

## False Positives
- Log rotation.
- Maintenance.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1070.002/T1070.002.md
- https://www.virustotal.com/gui/file/54d60fd58d7fa3475fa123985bfc1594df26da25c1f5fbc7dfdba15876dd8ac5/behavior

## Metadata
- **Author:** Max Altgelt (Nextron Systems), Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research), MSTIC
- **Date:** 2021-10-15
- **Rule ID:** `3fcc9b35-39e4-44c0-a2ad-9e82b6902b31`
- **Source file:** `linux/process_creation/proc_creation_lnx_clear_syslog.yml`

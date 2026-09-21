---
type: detection_rule
title: "PUA - Netcat Suspicious Execution"
rule_id: e31033fc-33f0-4020-9a16-faf9b31cbf08
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1095]
---

# PUA - Netcat Suspicious Execution

## Description
Detects execution of Netcat. Adversaries may use a non-application layer protocol for communication between host and C2 server or among infected hosts within a network

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_cmdline:
  CommandLine|contains:
  - ' -lvp '
  - ' -lvnp'
  - ' -l -v -p '
  - ' -lv -p '
  - ' -l --proxy-type http '
  - ' -vnl --exec '
  - ' -vnl -e '
  - ' --lua-exec '
  - ' --sh-exec '
selection_img:
  Image|endswith:
  - \nc.exe
  - \ncat.exe
  - \netcat.exe
```

## MITRE ATT&CK
- T1095

## False Positives
- Legitimate ncat use

## References
- https://nmap.org/ncat/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1095/T1095.md
- https://www.revshells.com/

## Metadata
- **Author:** frack113, Florian Roth (Nextron Systems)
- **Date:** 2021-07-21
- **Rule ID:** `e31033fc-33f0-4020-9a16-faf9b31cbf08`
- **Source file:** `windows/process_creation/proc_creation_win_pua_netcat.yml`

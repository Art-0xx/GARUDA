---
type: detection_rule
title: "HackTool - HandleKatz LSASS Dumper Execution"
rule_id: ca621ba5-54ab-4035-9942-d378e6fcde3c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - HandleKatz LSASS Dumper Execution

## Description
Detects the use of HandleKatz, a tool that demonstrates the usage of cloned handles to Lsass in order to create an obfuscated memory dump of the same

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_flags:
  CommandLine|contains:
  - .dmp
  - lsass
  - .obf
  - dump
  CommandLine|contains|all:
  - '--pid:'
  - '--outfile:'
selection_loader_img:
  CommandLine|contains: '--pid:'
  Image|endswith: \loader.exe
selection_loader_imphash:
  Hashes|contains:
  - IMPHASH=38D9E015591BBFD4929E0D0F47FA0055
  - IMPHASH=0E2216679CA6E1094D63322E3412D650
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://github.com/codewhitesec/HandleKatz

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-08-18
- **Rule ID:** `ca621ba5-54ab-4035-9942-d378e6fcde3c`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_handlekatz.yml`

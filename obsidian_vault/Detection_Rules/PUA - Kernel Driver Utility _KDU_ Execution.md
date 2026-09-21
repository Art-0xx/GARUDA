---
type: detection_rule
title: "PUA - Kernel Driver Utility (KDU) Execution"
rule_id: e76ca062-4de0-4d79-8d90-160a0d335eca
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# PUA - Kernel Driver Utility (KDU) Execution

## Description
Detects execution of the Kernel Driver Utility (KDU) tool.
KDU can be used to bypass driver signature enforcement and load unsigned or malicious drivers into the Windows kernel.
Potentially allowing for privilege escalation, persistence, or evasion of security controls.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_suspicious:
  CommandLine|contains:
  - '-map '
  - '-prv '
  - '-dse '
  - '-ps '
selection_img:
- Image|endswith:
  - \kdu.exe
  - \hamakaze.exe
- OriginalFileName: hamakaze.exe
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Legitimate driver development, testing, or administrative troubleshooting (e.g., enabling/disabling hardware)

## References
- https://github.com/h4rmy/KDU
- https://huntress.com/blog/esxi-vm-escape-exploit

## Metadata
- **Author:** Matt Anderson, Dray Agha, Anna Pham (Huntress)
- **Date:** 2026-01-02
- **Rule ID:** `e76ca062-4de0-4d79-8d90-160a0d335eca`
- **Source file:** `windows/process_creation/proc_creation_win_pua_kdu_driver_tool.yml`

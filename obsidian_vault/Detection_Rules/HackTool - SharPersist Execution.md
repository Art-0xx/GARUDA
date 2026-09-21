---
type: detection_rule
title: "HackTool - SharPersist Execution"
rule_id: 26488ad0-f9fd-4536-876f-52fea846a2e4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053]
---

# HackTool - SharPersist Execution

## Description
Detects the execution of the hacktool SharPersist - used to deploy various different kinds of persistence mechanisms

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_cli_1:
  CommandLine|contains:
  - ' -t schtask -c '
  - ' -t startupfolder -c '
selection_cli_2:
  CommandLine|contains|all:
  - ' -t reg -c '
  - ' -m add'
selection_cli_3:
  CommandLine|contains|all:
  - ' -t service -c '
  - ' -m add'
selection_cli_4:
  CommandLine|contains|all:
  - ' -t schtask -c '
  - ' -m add'
selection_img:
- Image|endswith: \SharPersist.exe
- Product: SharPersist
```

## MITRE ATT&CK
- T1053

## False Positives
- Unknown

## References
- https://www.mandiant.com/resources/blog/sharpersist-windows-persistence-toolkit
- https://github.com/mandiant/SharPersist

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-09-15
- **Rule ID:** `26488ad0-f9fd-4536-876f-52fea846a2e4`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_sharpersist.yml`

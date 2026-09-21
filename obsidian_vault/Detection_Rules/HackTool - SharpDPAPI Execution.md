---
type: detection_rule
title: "HackTool - SharpDPAPI Execution"
rule_id: c7d33b50-f690-4b51-8cfb-0fb912a31e57
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134.001, attack.t1134.003]
---

# HackTool - SharpDPAPI Execution

## Description
Detects the execution of the SharpDPAPI tool based on CommandLine flags and PE metadata.
SharpDPAPI is a C# port of some DPAPI functionality from the Mimikatz project.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img or (selection_other_cli and 1 of selection_other_options_*)
selection_img:
- Image|endswith: \SharpDPAPI.exe
- OriginalFileName: SharpDPAPI.exe
selection_other_cli:
  CommandLine|contains:
  - ' backupkey '
  - ' blob '
  - ' certificates '
  - ' credentials '
  - ' keepass '
  - ' masterkeys '
  - ' rdg '
  - ' vaults '
selection_other_options_flags:
  CommandLine|contains:
  - ' /file:'
  - ' /machine'
  - ' /mkfile:'
  - ' /password:'
  - ' /pvk:'
  - ' /server:'
  - ' /target:'
  - ' /unprotect'
selection_other_options_guid:
  CommandLine|contains|all:
  - ' {'
  - '}:'
```

## MITRE ATT&CK
- T1134.001
- T1134.003

## False Positives
- Unknown

## References
- https://github.com/GhostPack/SharpDPAPI

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-06-26
- **Rule ID:** `c7d33b50-f690-4b51-8cfb-0fb912a31e57`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_sharp_dpapi_execution.yml`

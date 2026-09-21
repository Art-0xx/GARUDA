---
type: detection_rule
title: "PowerShell Execution With Potential Decryption Capabilities"
rule_id: 434c08ba-8406-4d15-8b24-782cb071a691
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# PowerShell Execution With Potential Decryption Capabilities

## Description
Detects PowerShell commands that decrypt an ".LNK" "file to drop the next stage of the malware.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_dir:
  CommandLine|contains:
  - 'Get-ChildItem '
  - 'dir '
  - 'gci '
  - 'ls '
selection_cli_gc:
  CommandLine|contains:
  - 'Get-Content '
  - 'gc '
  - 'cat '
  - 'type '
  - ReadAllBytes
selection_cli_specific:
- CommandLine|contains|all:
  - ' ^| '
  - \*.lnk
  - -Recurse
  - '-Skip '
- CommandLine|contains|all:
  - ' -ExpandProperty '
  - \*.lnk
  - WriteAllBytes
  - ' .length '
selection_img:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## False Positives
- Unlikely

## References
- https://research.checkpoint.com/2023/chinese-threat-actors-targeting-europe-in-smugx-campaign/

## Metadata
- **Author:** X__Junior (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-30
- **Rule ID:** `434c08ba-8406-4d15-8b24-782cb071a691`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_decrypt_pattern.yml`

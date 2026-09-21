---
type: detection_rule
title: "Suspicious Greedy Compression Using Rar.EXE"
rule_id: afe52666-401e-4a02-b4ff-5d128990b8cb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Suspicious Greedy Compression Using Rar.EXE

## Description
Detects RAR usage that creates an archive from a suspicious folder, either a system folder or one of the folders often used by attackers for staging purposes

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_opt_* and all of selection_cli_*
selection_cli_flags:
  CommandLine|contains|all:
  - ' -hp'
  - ' -r '
selection_cli_folders:
  CommandLine|contains:
  - ' ?:\\\*.'
  - ' ?:\\\\\*.'
  - ' ?:\$Recycle.bin\'
  - ' ?:\PerfLogs\'
  - ' ?:\Temp'
  - ' ?:\Users\Public\'
  - ' ?:\Windows\'
  - ' %public%'
selection_opt_1:
- Image|endswith: \rar.exe
- Description: Command line RAR
selection_opt_2:
  CommandLine|contains:
  - '.exe a '
  - ' a -m'
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://decoded.avast.io/martinchlumecky/png-steganography

## Metadata
- **Author:** X__Junior (Nextron Systems), Florian Roth (Nextron Systems)
- **Date:** 2022-12-15
- **Rule ID:** `afe52666-401e-4a02-b4ff-5d128990b8cb`
- **Source file:** `windows/process_creation/proc_creation_win_rar_susp_greedy_compression.yml`

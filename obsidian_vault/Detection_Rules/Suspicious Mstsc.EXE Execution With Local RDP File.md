---
type: detection_rule
title: "Suspicious Mstsc.EXE Execution With Local RDP File"
rule_id: 6e22722b-dfb1-4508-a911-49ac840b40f8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Suspicious Mstsc.EXE Execution With Local RDP File

## Description
Detects potential RDP connection via Mstsc using a local ".rdp" file located in suspicious locations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_extension:
  CommandLine|endswith:
  - .rdp
  - .rdp"
selection_img:
- Image|endswith: \mstsc.exe
- OriginalFileName: mstsc.exe
selection_paths:
  CommandLine|contains:
  - :\Users\Public\
  - :\Windows\System32\spool\drivers\color
  - ':\Windows\System32\Tasks_Migrated '
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - :\Windows\Tracing\
  - \AppData\Local\Temp\
  - \Downloads\
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Likelihood is related to how often the paths are used in the environment

## References
- https://www.blackhillsinfosec.com/rogue-rdp-revisiting-initial-access-methods/
- https://web.archive.org/web/20230726144748/https://blog.thickmints.dev/mintsights/detecting-rogue-rdp/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-18
- **Rule ID:** `6e22722b-dfb1-4508-a911-49ac840b40f8`
- **Source file:** `windows/process_creation/proc_creation_win_mstsc_run_local_rdp_file_susp_location.yml`

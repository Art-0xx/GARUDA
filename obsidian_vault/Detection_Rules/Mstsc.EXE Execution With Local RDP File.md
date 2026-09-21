---
type: detection_rule
title: "Mstsc.EXE Execution With Local RDP File"
rule_id: 5fdce3ac-e7f9-4ecd-a3aa-a4d78ebbf0af
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Mstsc.EXE Execution With Local RDP File

## Description
Detects potential RDP connection via Mstsc using a local ".rdp" file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_wsl:
  CommandLine|contains: C:\ProgramData\Microsoft\WSL\wslg.rdp
  ParentImage: C:\Windows\System32\lxss\wslhost.exe
selection_cli:
  CommandLine|endswith:
  - .rdp
  - .rdp"
selection_img:
- Image|endswith: \mstsc.exe
- OriginalFileName: mstsc.exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Likely with legitimate usage of ".rdp" files

## References
- https://www.blackhillsinfosec.com/rogue-rdp-revisiting-initial-access-methods/
- https://web.archive.org/web/20230726144748/https://blog.thickmints.dev/mintsights/detecting-rogue-rdp/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Christopher Peacock @securepeacock
- **Date:** 2023-04-18
- **Rule ID:** `5fdce3ac-e7f9-4ecd-a3aa-a4d78ebbf0af`
- **Source file:** `windows/process_creation/proc_creation_win_mstsc_run_local_rdp_file.yml`

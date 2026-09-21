---
type: detection_rule
title: "WinRAR Execution in Non-Standard Folder"
rule_id: 4ede543c-e098-43d9-a28f-dd784a13132f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# WinRAR Execution in Non-Standard Folder

## Description
Detects a suspicious WinRAR execution in a folder which is not the default installation folder

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_path:
  Image|contains:
  - :\Program Files (x86)\WinRAR\
  - :\Program Files\WinRAR\
filter_main_unrar:
  Image|endswith: \UnRAR.exe
filter_optional_temp:
  Image|contains: :\Windows\Temp\
selection:
- Image|endswith:
  - \rar.exe
  - \winrar.exe
- Description:
  - Command line RAR
  - WinRAR
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Legitimate use of WinRAR in a folder of a software that bundles WinRAR

## References
- https://twitter.com/cyb3rops/status/1460978167628406785

## Metadata
- **Author:** Florian Roth (Nextron Systems), Tigzy
- **Date:** 2021-11-17
- **Rule ID:** `4ede543c-e098-43d9-a28f-dd784a13132f`
- **Source file:** `windows/process_creation/proc_creation_win_winrar_uncommon_folder_execution.yml`

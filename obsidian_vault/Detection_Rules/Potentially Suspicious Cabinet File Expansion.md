---
type: detection_rule
title: "Potentially Suspicious Cabinet File Expansion"
rule_id: 9f107a84-532c-41af-b005-8d12a607639f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potentially Suspicious Cabinet File Expansion

## Description
Detects the expansion or decompression of cabinet files from potentially suspicious or uncommon locations, e.g. seen in Iranian MeteorExpress related attacks

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_cmd and 1 of selection_folders_* and not 1 of filter_optional_*
filter_optional_dell:
  CommandLine|contains: C:\ProgramData\Dell\UpdateService\Temp\
  ParentImage: C:\Program Files (x86)\Dell\UpdateService\ServiceShell.exe
selection_cmd:
  CommandLine|contains|windash: '-F:'
  Image|endswith: \expand.exe
selection_folders_1:
  CommandLine|contains:
  - :\Perflogs\
  - :\ProgramData
  - :\Users\Public\
  - :\Windows\Temp\
  - \Admin$\
  - \AppData\Local\Temp\
  - \AppData\Roaming\
  - \C$\
  - \Temporary Internet
selection_folders_2:
- CommandLine|contains|all:
  - :\Users\
  - \Favorites\
- CommandLine|contains|all:
  - :\Users\
  - \Favourites\
- CommandLine|contains|all:
  - :\Users\
  - \Contacts\
```

## MITRE ATT&CK
- T1218

## False Positives
- System administrator Usage

## References
- https://labs.sentinelone.com/meteorexpress-mysterious-wiper-paralyzes-iranian-trains-with-epic-troll
- https://blog.malwarebytes.com/threat-intelligence/2021/08/new-variant-of-konni-malware-used-in-campaign-targetting-russia/

## Metadata
- **Author:** Bhabesh Raj, X__Junior (Nextron Systems)
- **Date:** 2021-07-30
- **Rule ID:** `9f107a84-532c-41af-b005-8d12a607639f`
- **Source file:** `windows/process_creation/proc_creation_win_expand_cabinet_files.yml`

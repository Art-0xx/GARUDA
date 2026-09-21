---
type: detection_rule
title: "Writing Of Malicious Files To The Fonts Folder"
rule_id: ae9b0bd7-8888-4606-b444-0ed7410cb728
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1211, attack.t1059]
---

# Writing Of Malicious Files To The Fonts Folder

## Description
Monitors for the hiding possible malicious files in the C:\Windows\Fonts\ location. This folder doesn't require admin privillege to be written and executed from.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_1:
  CommandLine|contains:
  - echo
  - copy
  - type
  - file createnew
  - cacls
selection_2:
  CommandLine|contains: C:\Windows\Fonts\
selection_3:
  CommandLine|contains:
  - .sh
  - .exe
  - .dll
  - .bin
  - .bat
  - .cmd
  - .js
  - .msh
  - .reg
  - .scr
  - .ps
  - .vb
  - .jar
  - .pl
  - '.inf'
  - .cpl
  - .hta
  - .msi
  - .vbs
```

## MITRE ATT&CK
- T1211
- T1059

## False Positives
- Unknown

## References
- https://thedfirreport.com/2020/04/20/sqlserver-or-the-miner-in-the-basement/

## Metadata
- **Author:** Sreeman
- **Date:** 2020-04-21
- **Rule ID:** `ae9b0bd7-8888-4606-b444-0ed7410cb728`
- **Source file:** `windows/process_creation/proc_creation_win_susp_hiding_malware_in_fonts_folder.yml`

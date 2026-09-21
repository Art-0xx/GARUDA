---
type: detection_rule
title: "Potential SPN Enumeration Via Setspn.EXE"
rule_id: 1eeed653-dbc8-4187-ad0c-eeebb20e6599
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558.003]
---

# Potential SPN Enumeration Via Setspn.EXE

## Description
Detects service principal name (SPN) enumeration used for Kerberoasting

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' -q '
  - ' /q '
selection_pe:
- Image|endswith: \setspn.exe
- OriginalFileName: setspn.exe
- Description|contains|all:
  - Query or reset the computer
  - SPN attribute
```

## MITRE ATT&CK
- T1558.003

## False Positives
- Administration activity

## References
- https://web.archive.org/web/20200329173843/https://p16.praetorian.com/blog/how-to-use-kerberoasting-t1208-for-privilege-escalation
- https://www.praetorian.com/blog/how-to-use-kerberoasting-t1208-for-privilege-escalation/?edition=2019

## Metadata
- **Author:** Markus Neis, keepwatch
- **Date:** 2018-11-14
- **Rule ID:** `1eeed653-dbc8-4187-ad0c-eeebb20e6599`
- **Source file:** `windows/process_creation/proc_creation_win_setspn_spn_enumeration.yml`

---
type: detection_rule
title: "Potential MsiExec Masquerading"
rule_id: e22a6eb2-f8a5-44b5-8b44-a2dbd47b1144
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.005]
---

# Potential MsiExec Masquerading

## Description
Detects the execution of msiexec.exe from an uncommon directory

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\WinSxS\
selection:
- Image|endswith: \msiexec.exe
- OriginalFileName: \msiexec.exe
```

## MITRE ATT&CK
- T1036.005

## False Positives
- Unknown

## References
- https://twitter.com/200_okay_/status/1194765831911215104

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-11-14
- **Rule ID:** `e22a6eb2-f8a5-44b5-8b44-a2dbd47b1144`
- **Source file:** `windows/process_creation/proc_creation_win_msiexec_masquerading.yml`

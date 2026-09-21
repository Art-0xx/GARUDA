---
type: detection_rule
title: "Potential Suspicious Registry File Imported Via Reg.EXE"
rule_id: 62e0298b-e994-4189-bc87-bc699aa62d97
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1112]
---

# Potential Suspicious Registry File Imported Via Reg.EXE

## Description
Detects the import of '.reg' files from suspicious paths using the 'reg.exe' utility

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ' import '
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_paths:
  CommandLine|contains:
  - C:\Users\
  - '%temp%'
  - '%tmp%'
  - '%appdata%'
  - \AppData\Local\Temp\
  - C:\Windows\Temp\
  - C:\ProgramData\
```

## MITRE ATT&CK
- T1112

## False Positives
- Legitimate import of keys

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/reg-import

## Metadata
- **Author:** frack113, Nasreddine Bencherchali
- **Date:** 2022-08-01
- **Rule ID:** `62e0298b-e994-4189-bc87-bc699aa62d97`
- **Source file:** `windows/process_creation/proc_creation_win_reg_import_from_suspicious_paths.yml`

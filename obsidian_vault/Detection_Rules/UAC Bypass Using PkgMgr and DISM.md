---
type: detection_rule
title: "UAC Bypass Using PkgMgr and DISM"
rule_id: a743ceba-c771-4d75-97eb-8a90f7f4844c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using PkgMgr and DISM

## Description
Detects the pattern of UAC Bypass using pkgmgr.exe and dism.exe (UACMe 23)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \dism.exe
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentImage|endswith: \pkgmgr.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `a743ceba-c771-4d75-97eb-8a90f7f4844c`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_pkgmgr_dism.yml`

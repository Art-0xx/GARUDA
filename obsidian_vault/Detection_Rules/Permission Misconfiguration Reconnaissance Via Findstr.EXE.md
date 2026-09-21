---
type: detection_rule
title: "Permission Misconfiguration Reconnaissance Via Findstr.EXE"
rule_id: 47e4bab7-c626-47dc-967b-255608c9a920
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.006]
---

# Permission Misconfiguration Reconnaissance Via Findstr.EXE

## Description
Detects usage of findstr with the "EVERYONE" or "BUILTIN" keywords.
This was seen being used in combination with "icacls" and other utilities to spot misconfigured files or folders permissions.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_findstr_* or selection_special
selection_findstr_cli:
  CommandLine|contains:
  - '"Everyone"'
  - '''Everyone'''
  - '"BUILTIN\\"'
  - '''BUILTIN\'''
selection_findstr_img:
- Image|endswith:
  - \find.exe
  - \findstr.exe
- OriginalFileName:
  - FIND.EXE
  - FINDSTR.EXE
selection_special:
  CommandLine|contains|all:
  - 'icacls '
  - 'findstr '
  - Everyone
```

## MITRE ATT&CK
- T1552.006

## False Positives
- Unknown

## References
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-12
- **Rule ID:** `47e4bab7-c626-47dc-967b-255608c9a920`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_recon_everyone.yml`

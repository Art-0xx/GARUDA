---
type: detection_rule
title: "PUA - Process Hacker Execution"
rule_id: 811e0002-b13b-4a15-9d00-a613fce66e42
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1622, attack.t1564, attack.t1543]
---

# PUA - Process Hacker Execution

## Description
Detects the execution of Process Hacker based on binary metadata information (Image, Hash, Imphash, etc).
Process Hacker is a tool to view and manipulate processes, kernel options and other low level options.
Threat actors abused older vulnerable versions to manipulate system processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|contains: \ProcessHacker_
- Image|endswith: \ProcessHacker.exe
- OriginalFileName:
  - ProcessHacker.exe
  - Process Hacker
- Description: Process Hacker
- Product: Process Hacker
- Hashes|contains:
  - MD5=68F9B52895F4D34E74112F3129B3B00D
  - MD5=B365AF317AE730A67C936F21432B9C71
  - SHA1=A0BDFAC3CE1880B32FF9B696458327CE352E3B1D
  - SHA1=C5E2018BF7C0F314FED4FD7FE7E69FA2E648359E
  - SHA256=D4A0FE56316A2C45B9BA9AC1005363309A3EDC7ACF9E4DF64D326A0FF273E80F
  - SHA256=BD2C2CF0631D881ED382817AFCCE2B093F4E412FFB170A719E2762F250ABFEA4
  - IMPHASH=3695333C60DEDECDCAFF1590409AA462
  - IMPHASH=04DE0AD9C37EB7BD52043D2ECAC958DF
```

## MITRE ATT&CK
- T1622
- T1564
- T1543

## False Positives
- While sometimes 'Process Hacker is used by legitimate administrators, the execution of Process Hacker must be investigated and allowed on a case by case basis

## References
- https://processhacker.sourceforge.io/
- https://www.crowdstrike.com/blog/falcon-overwatch-report-finds-increase-in-ecrime/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-10-10
- **Rule ID:** `811e0002-b13b-4a15-9d00-a613fce66e42`
- **Source file:** `windows/process_creation/proc_creation_win_pua_process_hacker.yml`

---
type: detection_rule
title: "Shadow Copies Creation Using Operating Systems Utilities"
rule_id: b17ea6f7-6e90-447e-a799-e6c0a493d6ce
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1003.002, attack.t1003.003]
---

# Shadow Copies Creation Using Operating Systems Utilities

## Description
Shadow Copies creation using operating systems utilities, possible credential access

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - shadow
  - create
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \wmic.exe
  - \vssadmin.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
  - wmic.exe
  - VSSADMIN.EXE
```

## MITRE ATT&CK
- T1003
- T1003.002
- T1003.003

## False Positives
- Legitimate administrator working with shadow copies, access for backup purposes

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment
- https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/tutorial-for-ntds-goodness-vssadmin-wmis-ntdsdit-system/

## Metadata
- **Author:** Teymur Kheirkhabarov, Daniil Yugoslavskiy, oscd.community
- **Date:** 2019-10-22
- **Rule ID:** `b17ea6f7-6e90-447e-a799-e6c0a493d6ce`
- **Source file:** `windows/process_creation/proc_creation_win_susp_shadow_copies_creation.yml`

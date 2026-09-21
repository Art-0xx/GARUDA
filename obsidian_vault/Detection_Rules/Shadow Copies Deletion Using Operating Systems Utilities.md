---
type: detection_rule
title: "Shadow Copies Deletion Using Operating Systems Utilities"
rule_id: c947b146-0abc-4c87-9c64-b17e9d7274a2
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070, attack.t1490]
---

# Shadow Copies Deletion Using Operating Systems Utilities

## Description
Shadow Copies deletion using operating systems utilities

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (all of selection1*) or (all of selection2*) or (all of selection3*)
selection1_cli:
  CommandLine|contains|all:
  - shadow
  - delete
selection1_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \wmic.exe
  - \vssadmin.exe
  - \diskshadow.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
  - wmic.exe
  - VSSADMIN.EXE
  - diskshadow.exe
selection2_cli:
  CommandLine|contains|all:
  - delete
  - catalog
  - quiet
selection2_img:
- Image|endswith: \wbadmin.exe
- OriginalFileName: WBADMIN.EXE
selection3_cli:
  CommandLine|contains:
  - unbounded
  - /MaxSize=
  CommandLine|contains|all:
  - resize
  - shadowstorage
selection3_img:
- Image|endswith: \vssadmin.exe
- OriginalFileName: VSSADMIN.EXE
```

## MITRE ATT&CK
- T1070
- T1490

## False Positives
- Legitimate Administrator deletes Shadow Copies using operating systems utilities for legitimate reason
- LANDesk LDClient Ivanti-PSModule (PS EncodedCommand)

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment
- https://blog.talosintelligence.com/2017/05/wannacry.html
- https://securingtomorrow.mcafee.com/other-blogs/mcafee-labs/new-teslacrypt-ransomware-arrives-via-spam/
- https://www.bleepingcomputer.com/news/security/why-everyone-should-disable-vssadmin-exe-now/
- https://www.hybrid-analysis.com/sample/ed01ebfbc9eb5bbea545af4d01bf5f1071661840480439c6e5babe8e080e41aa?environmentId=100

## Metadata
- **Author:** Florian Roth (Nextron Systems), Michael Haag, Teymur Kheirkhabarov, Daniil Yugoslavskiy, oscd.community, Andreas Hunkeler (@Karneades)
- **Date:** 2019-10-22
- **Rule ID:** `c947b146-0abc-4c87-9c64-b17e9d7274a2`
- **Source file:** `windows/process_creation/proc_creation_win_susp_shadow_copies_deletion.yml`

---
type: detection_rule
title: "File Recovery From Backup Via Wbadmin.EXE"
rule_id: 6fe4aa1e-0531-4510-8be2-782154b73b48
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# File Recovery From Backup Via Wbadmin.EXE

## Description
Detects the recovery of files from backups via "wbadmin.exe".
Attackers can restore sensitive files such as NTDS.DIT or Registry Hives from backups in order to potentially extract credentials.

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
  - ' recovery'
  - recoveryTarget
  - itemtype:File
selection_img:
- Image|endswith: \wbadmin.exe
- OriginalFileName: WBADMIN.EXE
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wbadmin-start-recovery
- https://lolbas-project.github.io/lolbas/Binaries/Wbadmin/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2024-05-10
- **Rule ID:** `6fe4aa1e-0531-4510-8be2-782154b73b48`
- **Source file:** `windows/process_creation/proc_creation_win_wbadmin_restore_file.yml`

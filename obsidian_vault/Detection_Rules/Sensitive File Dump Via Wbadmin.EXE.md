---
type: detection_rule
title: "Sensitive File Dump Via Wbadmin.EXE"
rule_id: 8b93a509-1cb8-42e1-97aa-ee24224cdc15
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.003]
---

# Sensitive File Dump Via Wbadmin.EXE

## Description
Detects the dump of highly sensitive files such as "NTDS.DIT" and "SECURITY" hive.
Attackers can leverage the "wbadmin" utility in order to dump sensitive files that might contain credential or sensitive information.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_backup:
  CommandLine|contains:
  - start
  - backup
selection_img:
- Image|endswith: \wbadmin.exe
- OriginalFileName: WBADMIN.EXE
selection_path:
  CommandLine|contains:
  - \config\SAM
  - \config\SECURITY
  - \config\SYSTEM
  - \Windows\NTDS\NTDS.dit
```

## MITRE ATT&CK
- T1003.003

## False Positives
- Legitimate backup operation by authorized administrators. Matches must be investigated and allowed on a case by case basis.

## References
- https://github.com/LOLBAS-Project/LOLBAS/blob/2cc01b01132b5c304027a658c698ae09dd6a92bf/yml/OSBinaries/Wbadmin.yml
- https://lolbas-project.github.io/lolbas/Binaries/Wbadmin/
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wbadmin-start-recovery
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wbadmin-start-backup

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2024-05-10
- **Rule ID:** `8b93a509-1cb8-42e1-97aa-ee24224cdc15`
- **Source file:** `windows/process_creation/proc_creation_win_wbadmin_dump_sensitive_files.yml`

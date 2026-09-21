---
type: detection_rule
title: "All Backups Deleted Via Wbadmin.EXE"
rule_id: 639c9081-f482-47d3-a0bd-ddee3d4ecd76
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# All Backups Deleted Via Wbadmin.EXE

## Description
Detects the deletion of all backups or system state backups via "wbadmin.exe".
This technique is used by numerous ransomware families and actors.
This may only be successful on server platforms that have Windows Backup enabled.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: keepVersions:0
  CommandLine|contains|all:
  - delete
  - backup
selection_img:
- Image|endswith: \wbadmin.exe
- OriginalFileName: WBADMIN.EXE
```

## MITRE ATT&CK
- T1490

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md#atomic-test-5---windows---delete-volume-shadow-copies-via-wmi-with-powershell
- https://github.com/albertzsigovits/malware-notes/blob/558898932c1579ff589290092a2c8febefc3a4c9/Ransomware/Lockbit.md
- https://www.sentinelone.com/labs/ranzy-ransomware-better-encryption-among-new-features-of-thunderx-derivative/
- https://www.trendmicro.com/vinfo/us/security/news/cybercrime-and-digital-threats/ransomware-report-avaddon-and-new-techniques-emerge-industrial-sector-targeted
- https://www.trendmicro.com/content/dam/trendmicro/global/en/research/24/b/lockbit-attempts-to-stay-afloat-with-a-new-version/technical-appendix-lockbit-ng-dev-analysis.pdf

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-12-13
- **Rule ID:** `639c9081-f482-47d3-a0bd-ddee3d4ecd76`
- **Source file:** `windows/process_creation/proc_creation_win_wbadmin_delete_all_backups.yml`

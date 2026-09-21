---
type: detection_rule
title: "Detection of PowerShell Execution via Sqlps.exe"
rule_id: 0152550d-3a26-4efd-9f0e-54a0b28ae2f3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1127]
---

# Detection of PowerShell Execution via Sqlps.exe

## Description
This rule detects execution of a PowerShell code through the sqlps.exe utility, which is included in the standard set of utilities supplied with the MSSQL Server.
Script blocks are not logged in this case, so this utility helps to bypass protection mechanisms based on the analysis of these logs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent or (selection_image and not filter_image)
filter_image:
  ParentImage|endswith: \sqlagent.exe
selection_image:
- Image|endswith: \sqlps.exe
- OriginalFileName: sqlps.exe
selection_parent:
  ParentImage|endswith: \sqlps.exe
```

## MITRE ATT&CK
- T1059.001
- T1127

## False Positives
- Direct PS command execution through SQLPS.exe is uncommon, childprocess sqlps.exe spawned by sqlagent.exe is a legitimate action.

## References
- https://learn.microsoft.com/en-us/sql/tools/sqlps-utility?view=sql-server-ver15
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Sqlps/
- https://twitter.com/bryon_/status/975835709587075072

## Metadata
- **Author:** Agro (@agro_sev) oscd.community
- **Date:** 2020-10-10
- **Rule ID:** `0152550d-3a26-4efd-9f0e-54a0b28ae2f3`
- **Source file:** `windows/process_creation/proc_creation_win_mssql_sqlps_susp_execution.yml`

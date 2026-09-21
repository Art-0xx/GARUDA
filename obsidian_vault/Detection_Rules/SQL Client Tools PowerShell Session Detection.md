---
type: detection_rule
title: "SQL Client Tools PowerShell Session Detection"
rule_id: a746c9b8-a2fb-4ee5-a428-92bee9e99060
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1127]
---

# SQL Client Tools PowerShell Session Detection

## Description
This rule detects execution of a PowerShell code through the sqltoolsps.exe utility, which is included in the standard set of utilities supplied with the Microsoft SQL Server Management studio.
Script blocks are not logged in this case, so this utility helps to bypass protection mechanisms based on the analysis of these logs.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ParentImage|endswith: \smss.exe
selection:
- Image|endswith: \sqltoolsps.exe
- ParentImage|endswith: \sqltoolsps.exe
- OriginalFileName: \sqltoolsps.exe
```

## MITRE ATT&CK
- T1059.001
- T1127

## False Positives
- Direct PS command execution through SQLToolsPS.exe is uncommon, childprocess sqltoolsps.exe spawned by smss.exe is a legitimate action.

## References
- https://github.com/LOLBAS-Project/LOLBAS/blob/8283d8d91552213ded165fd36deb6cb9534cb443/yml/OtherMSBinaries/Sqltoolsps.yml
- https://twitter.com/pabraeken/status/993298228840992768

## Metadata
- **Author:** Agro (@agro_sev) oscd.communitly
- **Date:** 2020-10-13
- **Rule ID:** `a746c9b8-a2fb-4ee5-a428-92bee9e99060`
- **Source file:** `windows/process_creation/proc_creation_win_mssql_sqltoolsps_susp_execution.yml`

---
type: detection_rule
title: "Suspicious Child Process Of SQL Server"
rule_id: 869b9ca7-9ea2-4a5a-8325-e80e62f75445
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.003, attack.t1190]
---

# Suspicious Child Process Of SQL Server

## Description
Detects suspicious child processes of the SQLServer process. This could indicate potential RCE or SQL Injection.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_datev:
  CommandLine|startswith: '"C:\Windows\system32\cmd.exe" '
  Image: C:\Windows\System32\cmd.exe
  ParentImage|endswith: DATEV_DBENGINE\MSSQL\Binn\sqlservr.exe
  ParentImage|startswith: C:\Program Files\Microsoft SQL Server\
selection:
  Image|endswith:
  - \bash.exe
  - \bitsadmin.exe
  - \cmd.exe
  - \netstat.exe
  - \nltest.exe
  - \ping.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \sh.exe
  - \systeminfo.exe
  - \tasklist.exe
  - \wsl.exe
  ParentImage|endswith: \sqlservr.exe
```

## MITRE ATT&CK
- T1505.003
- T1190

## References
- Internal Research

## Metadata
- **Author:** FPT.EagleEye Team, wagga
- **Date:** 2020-12-11
- **Rule ID:** `869b9ca7-9ea2-4a5a-8325-e80e62f75445`
- **Source file:** `windows/process_creation/proc_creation_win_mssql_susp_child_process.yml`

---
type: detection_rule
title: "Suspicious Child Process Of Veeam Dabatase"
rule_id: d55b793d-f847-4eea-b59a-5ab09908ac90
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
---

# Suspicious Child Process Of Veeam Dabatase

## Description
Detects suspicious child processes of the Veeam service process. This could indicate potential RCE or SQL Injection.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_child_*
selection_child_1:
  CommandLine|contains:
  - '-ex '
  - bypass
  - cscript
  - DownloadString
  - http://
  - https://
  - mshta
  - regsvr32
  - rundll32
  - wscript
  - 'copy '
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \wsl.exe
  - \wt.exe
selection_child_2:
  Image|endswith:
  - \net.exe
  - \net1.exe
  - \netstat.exe
  - \nltest.exe
  - \ping.exe
  - \tasklist.exe
  - \whoami.exe
selection_parent:
  ParentCommandLine|contains: VEEAMSQL
  ParentImage|endswith: \sqlservr.exe
```

## References
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-04
- **Rule ID:** `d55b793d-f847-4eea-b59a-5ab09908ac90`
- **Source file:** `windows/process_creation/proc_creation_win_mssql_veaam_susp_child_processes.yml`

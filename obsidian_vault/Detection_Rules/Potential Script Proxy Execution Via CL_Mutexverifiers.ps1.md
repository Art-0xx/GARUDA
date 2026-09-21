---
type: detection_rule
title: "Potential Script Proxy Execution Via CL_Mutexverifiers.ps1"
rule_id: 1e0e1a81-e79b-44bc-935b-ddb9c8006b3d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1216]
---

# Potential Script Proxy Execution Via CL_Mutexverifiers.ps1

## Description
Detects the use of the Microsoft signed script "CL_mutexverifiers" to proxy the execution of additional PowerShell script commands

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_pwsh:
  CommandLine|contains: ' -nologo -windowstyle minimized -file '
  Image|endswith: \powershell.exe
  ParentImage|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_temp:
  CommandLine|contains:
  - \AppData\Local\Temp\
  - \Windows\Temp\
```

## MITRE ATT&CK
- T1216

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Scripts/CL_mutexverifiers/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), oscd.community, Natalia Shornikova, frack113
- **Date:** 2022-05-21
- **Rule ID:** `1e0e1a81-e79b-44bc-935b-ddb9c8006b3d`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_cl_mutexverifiers.yml`

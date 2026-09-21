---
type: detection_rule
title: "Stop Windows Service Via PowerShell Stop-Service"
rule_id: c49c5062-0966-4170-9efd-9968c913a6cf
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1489]
---

# Stop Windows Service Via PowerShell Stop-Service

## Description
Detects the stopping of a Windows service via the PowerShell Cmdlet "Stop-Service"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: 'Stop-Service '
selection_sc_net_img:
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1489

## False Positives
- There are many legitimate reasons to stop a service. This rule isn't looking for any suspicious behaviour in particular. Filter legitimate activity accordingly

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/stop-service?view=powershell-7.4

## Metadata
- **Author:** Jakob Weinzettl, oscd.community, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-03-05
- **Rule ID:** `c49c5062-0966-4170-9efd-9968c913a6cf`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_stop_service.yml`

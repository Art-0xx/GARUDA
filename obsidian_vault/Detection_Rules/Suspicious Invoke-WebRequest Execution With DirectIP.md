---
type: detection_rule
title: "Suspicious Invoke-WebRequest Execution With DirectIP"
rule_id: 1edff897-9146-48d2-9066-52e8d8f80a2f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# Suspicious Invoke-WebRequest Execution With DirectIP

## Description
Detects calls to PowerShell with Invoke-WebRequest cmdlet using direct IP access

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_commands:
  CommandLine|contains:
  - 'curl '
  - Invoke-RestMethod
  - Invoke-WebRequest
  - ' irm '
  - 'iwr '
  - 'wget '
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - powershell_ise.EXE
  - PowerShell.EXE
  - pwsh.dll
selection_ip:
  CommandLine|contains:
  - ://1
  - ://2
  - ://3
  - ://4
  - ://5
  - ://6
  - ://7
  - ://8
  - ://9
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://www.huntress.com/blog/critical-vulnerabilities-in-papercut-print-management-software

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-21
- **Rule ID:** `1edff897-9146-48d2-9066-52e8d8f80a2f`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_invoke_webrequest_direct_ip.yml`

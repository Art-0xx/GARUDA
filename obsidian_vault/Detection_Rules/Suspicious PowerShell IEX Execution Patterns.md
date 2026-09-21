---
type: detection_rule
title: "Suspicious PowerShell IEX Execution Patterns"
rule_id: 09576804-7a05-458e-a817-eb718ca91f54
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell IEX Execution Patterns

## Description
Detects suspicious ways to run Invoke-Execution using IEX alias

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_combined_* or selection_standalone
selection_combined_1:
  CommandLine|contains:
  - ' | iex;'
  - ' | iex '
  - ' | iex}'
  - ' | IEX ;'
  - ' | IEX -Error'
  - ' | IEX (new'
  - ');IEX '
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_combined_2:
  CommandLine|contains:
  - ::FromBase64String
  - '.GetString([System.Convert]::'
selection_standalone:
  CommandLine|contains:
  - )|iex;$
  - );iex($
  - );iex $
  - ' | IEX | '
  - ' | iex\"'
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate scripts that use IEX

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.utility/invoke-expression?view=powershell-7.2
- https://www.huntress.com/blog/slashandgrab-screen-connect-post-exploitation-in-the-wild-cve-2024-1709-cve-2024-1708

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-03-24
- **Rule ID:** `09576804-7a05-458e-a817-eb718ca91f54`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_iex_patterns.yml`

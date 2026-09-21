---
type: detection_rule
title: "Exchange PowerShell Snap-Ins Usage"
rule_id: 25676e10-2121-446e-80a4-71ff8506af47
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1114]
---

# Exchange PowerShell Snap-Ins Usage

## Description
Detects adding and using Exchange PowerShell snap-ins to export mailbox data. As seen used by HAFNIUM and APT27

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_msiexec:
  CommandLine|contains: $exserver=Get-ExchangeServer ([Environment]::MachineName)
    -ErrorVariable exerr 2> $null
  ParentImage: C:\Windows\System32\msiexec.exe
selection_cli:
  CommandLine|contains: Add-PSSnapin
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_module:
  CommandLine|contains:
  - Microsoft.Exchange.Powershell.Snapin
  - Microsoft.Exchange.Management.PowerShell.SnapIn
```

## MITRE ATT&CK
- T1059.001
- T1114

## False Positives
- Unknown

## References
- https://www.volexity.com/blog/2021/03/02/active-exploitation-of-microsoft-exchange-zero-day-vulnerabilities/
- https://www.microsoft.com/security/blog/2021/03/02/hafnium-targeting-exchange-servers/
- https://www.intrinsec.com/apt27-analysis/

## Metadata
- **Author:** FPT.EagleEye, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-03-03
- **Rule ID:** `25676e10-2121-446e-80a4-71ff8506af47`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_snapins_hafnium.yml`

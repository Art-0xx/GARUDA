---
type: detection_rule
title: "User Discovery And Export Via Get-ADUser Cmdlet"
rule_id: 1114e048-b69c-4f41-bc20-657245ae6e3f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# User Discovery And Export Via Get-ADUser Cmdlet

## Description
Detects usage of the Get-ADUser cmdlet to collect user information and output it to a file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - ' > '
  - ' | Select '
  - Out-File
  - Set-Content
  - Add-Content
  CommandLine|contains|all:
  - 'Get-ADUser '
  - ' -Filter \*'
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1033

## False Positives
- Legitimate admin scripts may use the same technique, it's better to exclude specific computers or users who execute these commands or scripts often

## References
- http://blog.talosintelligence.com/2022/09/lazarus-three-rats.html
- https://www.microsoft.com/en-us/security/blog/2022/10/18/defenders-beware-a-case-for-post-ransomware-investigations/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-09
- **Rule ID:** `1114e048-b69c-4f41-bc20-657245ae6e3f`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_user_discovery_get_aduser.yml`

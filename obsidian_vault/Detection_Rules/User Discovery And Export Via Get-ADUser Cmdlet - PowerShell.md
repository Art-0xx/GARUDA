---
type: detection_rule
title: "User Discovery And Export Via Get-ADUser Cmdlet - PowerShell"
rule_id: c2993223-6da8-4b1a-88ee-668b8bf315e9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# User Discovery And Export Via Get-ADUser Cmdlet - PowerShell

## Description
Detects usage of the Get-ADUser cmdlet to collect user information and output it to a file

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - ' > '
  - ' | Select '
  - Out-File
  - Set-Content
  - Add-Content
  ScriptBlockText|contains|all:
  - 'Get-ADUser '
  - ' -Filter \*'
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
- **Date:** 2022-11-17
- **Rule ID:** `c2993223-6da8-4b1a-88ee-668b8bf315e9`
- **Source file:** `windows/powershell/powershell_script/posh_ps_user_discovery_get_aduser.yml`

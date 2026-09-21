---
type: detection_rule
title: "Change PowerShell Policies to an Insecure Level - PowerShell"
rule_id: 61d0475c-173f-4844-86f7-f3eebae1c66b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Change PowerShell Policies to an Insecure Level - PowerShell

## Description
Detects changing the PowerShell script execution policy to a potentially insecure level using the "Set-ExecutionPolicy" cmdlet.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_chocolatey:
  ScriptBlockText|contains:
  - (New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1')
  - (New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1')
selection_cmdlet:
  ScriptBlockText|contains: Set-ExecutionPolicy
selection_option:
  ScriptBlockText|contains:
  - Unrestricted
  - bypass
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Administrator script

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.4
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_execution_policies?view=powershell-7.4
- https://adsecurity.org/?p=2604

## Metadata
- **Author:** frack113
- **Date:** 2021-10-20
- **Rule ID:** `61d0475c-173f-4844-86f7-f3eebae1c66b`
- **Source file:** `windows/powershell/powershell_script/posh_ps_set_policies_to_unsecure_level.yml`

---
type: detection_rule
title: "Potential PowerShell Obfuscation Using Alias Cmdlets"
rule_id: 96cd126d-f970-49c4-848a-da3a09f55c55
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Potential PowerShell Obfuscation Using Alias Cmdlets

## Description
Detects Set-Alias or New-Alias cmdlet usage. Which can be use as a mean to obfuscate PowerShell scripts

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_cim:
  ScriptBlockText:
  - Set-Alias -Name ncms -Value New-CimSession -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name gcls -Value Get-CimClass -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name ncso -Value New-CimSessionOption -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name gcms -Value Get-CimSession -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name rcms -Value Remove-cimSession -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name rcie -Value Register-CimIndicationEvent -Option ReadOnly, AllScope
    -ErrorAction SilentlyContinue
  - Set-Alias -Name gcai -Value Get-CimAssociatedInstance -Option ReadOnly, AllScope
    -ErrorAction SilentlyContinue
  - Set-Alias -Name gcim -Value Get-CimInstance -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name scim -Value Set-CimInstance -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name ncim -Value New-CimInstance -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name rcim -Value Remove-cimInstance -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
  - Set-Alias -Name icim -Value Invoke-CimMethod -Option ReadOnly, AllScope -ErrorAction
    SilentlyContinue
selection:
  ScriptBlockText|contains:
  - 'Set-Alias '
  - 'New-Alias '
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/1337Rin/Swag-PSO

## Metadata
- **Author:** frack113
- **Date:** 2023-01-08
- **Rule ID:** `96cd126d-f970-49c4-848a-da3a09f55c55`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_set_alias.yml`

---
type: detection_rule
title: "Suspicious Computer Machine Password by PowerShell"
rule_id: e3818659-5016-4811-a73c-dde4679169d2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1078]
---

# Suspicious Computer Machine Password by PowerShell

## Description
The Reset-ComputerMachinePassword cmdlet changes the computer account password that the computers use to authenticate to the domain controllers in the domain.
You can use it to reset the password of the local computer.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ContextInfo|contains: Reset-ComputerMachinePassword
```

## MITRE ATT&CK
- T1078

## False Positives
- Administrator PowerShell scripts

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.management/reset-computermachinepassword?view=powershell-5.1
- https://thedfirreport.com/2022/02/21/qbot-and-zerologon-lead-to-full-domain-compromise/

## Metadata
- **Author:** frack113
- **Date:** 2022-02-21
- **Rule ID:** `e3818659-5016-4811-a73c-dde4679169d2`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_reset_computermachinepassword.yml`

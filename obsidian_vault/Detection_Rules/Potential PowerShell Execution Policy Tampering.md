---
type: detection_rule
title: "Potential PowerShell Execution Policy Tampering"
rule_id: fad91067-08c5-4d1a-8d8c-d96a21b37814
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential PowerShell Execution Policy Tampering

## Description
Detects changes to the PowerShell execution policy in order to bypass signing requirements for script execution

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_svchost:
  Image|contains:
  - :\Windows\System32\
  - :\Windows\SysWOW64\
selection:
  Details|contains:
  - Bypass
  - Unrestricted
  TargetObject|endswith:
  - \ShellIds\Microsoft.PowerShell\ExecutionPolicy
  - \Policies\Microsoft\Windows\PowerShell\ExecutionPolicy
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-11
- **Rule ID:** `fad91067-08c5-4d1a-8d8c-d96a21b37814`
- **Source file:** `windows/registry/registry_set/registry_set_powershell_execution_policy.yml`

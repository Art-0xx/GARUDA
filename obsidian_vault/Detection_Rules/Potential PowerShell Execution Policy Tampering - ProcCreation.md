---
type: detection_rule
title: "Potential PowerShell Execution Policy Tampering - ProcCreation"
rule_id: cf2e938e-9a3e-4fe8-a347-411642b28a9f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential PowerShell Execution Policy Tampering - ProcCreation

## Description
Detects changes to the PowerShell execution policy registry key in order to bypass signing requirements for script execution from the CommandLine

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_path:
  CommandLine|contains:
  - \ShellIds\Microsoft.PowerShell\ExecutionPolicy
  - \Policies\Microsoft\Windows\PowerShell\ExecutionPolicy
selection_values:
  CommandLine|contains:
  - Bypass
  - RemoteSigned
  - Unrestricted
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/de-de/powershell/module/microsoft.powershell.security/set-executionpolicy?view=powershell-7.3

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-11
- **Rule ID:** `cf2e938e-9a3e-4fe8-a347-411642b28a9f`
- **Source file:** `windows/process_creation/proc_creation_win_registry_set_unsecure_powershell_policy.yml`

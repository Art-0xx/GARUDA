---
type: detection_rule
title: "PowerShell Script Execution Policy Enabled"
rule_id: 8218c875-90b9-42e2-b60d-0b0069816d10
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
---

# PowerShell Script Execution Policy Enabled

## Description
Detects the enabling of the PowerShell script execution policy. Once enabled, this policy allows scripts to be executed.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: DWORD (0x00000001)
  TargetObject|endswith: \Policies\Microsoft\Windows\PowerShell\EnableScripts
```

## False Positives
- Likely

## References
- https://admx.help/?Category=Windows_10_2016&Policy=Microsoft.Policies.PowerShell::EnableScripts

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Thurein Oo
- **Date:** 2023-10-18
- **Rule ID:** `8218c875-90b9-42e2-b60d-0b0069816d10`
- **Source file:** `windows/registry/registry_set/registry_set_powershell_enablescripts_enabled.yml`

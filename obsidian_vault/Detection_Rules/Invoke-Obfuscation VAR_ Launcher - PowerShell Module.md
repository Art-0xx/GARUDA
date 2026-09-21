---
type: detection_rule
title: "Invoke-Obfuscation VAR+ Launcher - PowerShell Module"
rule_id: 6bfb8fa7-b2e7-4f6c-8d9d-824e5d06ea9e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR+ Launcher - PowerShell Module

## Description
Detects Obfuscated use of Environment Variables to execute PowerShell

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection_4103
selection_4103:
  Payload|re: cmd.{0,5}(?:/c|/r)(?:\s|)"set\s[a-zA-Z]{3,6}.*(?:\{\d\}){1,}\\"\s+?-f(?:.*\)){1,}.*"
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Jonathan Cheong, oscd.community
- **Date:** 2020-10-15
- **Rule ID:** `6bfb8fa7-b2e7-4f6c-8d9d-824e5d06ea9e`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_var.yml`

---
type: detection_rule
title: "Invoke-Obfuscation STDIN+ Launcher - PowerShell Module"
rule_id: 9ac8b09b-45de-4a07-9da1-0de8c09304a3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation STDIN+ Launcher - PowerShell Module

## Description
Detects Obfuscated use of stdin to execute PowerShell

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
  Payload|re: cmd.{0,5}(?:/c|/r).+powershell.+(?:\$\{?input\}?|noexit).+"
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
- **Rule ID:** `9ac8b09b-45de-4a07-9da1-0de8c09304a3`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_stdin.yml`

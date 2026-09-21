---
type: detection_rule
title: "Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - PowerShell Module"
rule_id: f3c89218-8c3d-4ba9-9974-f1d8e6a1b4a6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - PowerShell Module

## Description
Detects Obfuscated Powershell via VAR++ LAUNCHER

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
  Payload|re: (?i)&&set.*(\{\d\}){2,}\\"\s+?-f.*&&.*cmd.*/c
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2020-10-13
- **Rule ID:** `f3c89218-8c3d-4ba9-9974-f1d8e6a1b4a6`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_var.yml`

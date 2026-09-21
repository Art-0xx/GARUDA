---
type: detection_rule
title: "Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - PowerShell"
rule_id: e54f5149-6ba3-49cf-b153-070d24679126
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation VAR++ LAUNCHER OBFUSCATION - PowerShell

## Description
Detects Obfuscated Powershell via VAR++ LAUNCHER

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_4104
selection_4104:
  ScriptBlockText|re: (?i)&&set.*(\{\d\}){2,}\\"\s+?-f.*&&.*cmd.*/c
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
- **Rule ID:** `e54f5149-6ba3-49cf-b153-070d24679126`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_var.yml`

---
type: detection_rule
title: "Invoke-Obfuscation RUNDLL LAUNCHER - PowerShell Module"
rule_id: a23791fe-8846-485a-b16b-ca691e1b03d4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation RUNDLL LAUNCHER - PowerShell Module

## Description
Detects Obfuscated Powershell via RUNDLL LAUNCHER

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
  Payload|contains|all:
  - rundll32.exe
  - shell32.dll
  - shellexec_rundll
  - powershell
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
- **Date:** 2020-10-18
- **Rule ID:** `a23791fe-8846-485a-b16b-ca691e1b03d4`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_rundll.yml`

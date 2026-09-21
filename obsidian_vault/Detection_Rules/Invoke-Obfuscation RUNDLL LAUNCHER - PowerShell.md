---
type: detection_rule
title: "Invoke-Obfuscation RUNDLL LAUNCHER - PowerShell"
rule_id: e6cb92b4-b470-4eb8-8a9d-d63e8583aae0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation RUNDLL LAUNCHER - PowerShell

## Description
Detects Obfuscated Powershell via RUNDLL LAUNCHER

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
  ScriptBlockText|contains|all:
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
- **Rule ID:** `e6cb92b4-b470-4eb8-8a9d-d63e8583aae0`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_rundll.yml`

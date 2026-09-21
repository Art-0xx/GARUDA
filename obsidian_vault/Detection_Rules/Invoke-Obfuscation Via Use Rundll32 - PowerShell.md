---
type: detection_rule
title: "Invoke-Obfuscation Via Use Rundll32 - PowerShell"
rule_id: a5a30a6e-75ca-4233-8b8c-42e0f2037d3b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Rundll32 - PowerShell

## Description
Detects Obfuscated Powershell via use Rundll32 in Scripts

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
  ScriptBlockText|contains:
  - value
  - invoke
  - comspec
  - iex
  ScriptBlockText|contains|all:
  - '&&'
  - rundll32
  - shell32.dll
  - shellexec_rundll
```

## MITRE ATT&CK
- T1027
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2019-10-08
- **Rule ID:** `a5a30a6e-75ca-4233-8b8c-42e0f2037d3b`
- **Source file:** `windows/powershell/powershell_script/posh_ps_invoke_obfuscation_via_use_rundll32.yml`

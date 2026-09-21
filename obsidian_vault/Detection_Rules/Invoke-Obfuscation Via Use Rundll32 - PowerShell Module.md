---
type: detection_rule
title: "Invoke-Obfuscation Via Use Rundll32 - PowerShell Module"
rule_id: 88a22f69-62f9-4b8a-aa00-6b0212f2f05a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027, attack.t1059.001]
---

# Invoke-Obfuscation Via Use Rundll32 - PowerShell Module

## Description
Detects Obfuscated Powershell via use Rundll32 in Scripts

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
  Payload|contains:
  - value
  - invoke
  - comspec
  - iex
  Payload|contains|all:
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
- **Rule ID:** `88a22f69-62f9-4b8a-aa00-6b0212f2f05a`
- **Source file:** `windows/powershell/powershell_module/posh_pm_invoke_obfuscation_via_use_rundll32.yml`

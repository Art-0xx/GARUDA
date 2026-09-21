---
type: detection_rule
title: "Disable-WindowsOptionalFeature Command PowerShell"
rule_id: 99c4658d-2c5e-4d87-828d-7c066ca537c3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Disable-WindowsOptionalFeature Command PowerShell

## Description
Detect built in PowerShell cmdlet Disable-WindowsOptionalFeature, Deployment Image Servicing and Management tool.
Similar to DISM.exe, this cmdlet is used to enumerate, install, uninstall, configure, and update features and packages in Windows images

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cmd:
  ScriptBlockText|contains|all:
  - Disable-WindowsOptionalFeature
  - -Online
  - -FeatureName
selection_feature:
  ScriptBlockText|contains:
  - Windows-Defender-Gui
  - Windows-Defender-Features
  - Windows-Defender
  - Windows-Defender-ApplicationGuard
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/5b67c9b141fa3918017f8fa44f2f88f0b1ecb9e1/atomics/T1562.001/T1562.001.md
- https://learn.microsoft.com/en-us/powershell/module/dism/disable-windowsoptionalfeature?view=windowsserver2022-ps

## Metadata
- **Author:** frack113
- **Date:** 2022-09-10
- **Rule ID:** `99c4658d-2c5e-4d87-828d-7c066ca537c3`
- **Source file:** `windows/powershell/powershell_script/posh_ps_disable_windows_optional_feature.yml`

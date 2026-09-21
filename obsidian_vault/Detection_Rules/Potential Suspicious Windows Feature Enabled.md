---
type: detection_rule
title: "Potential Suspicious Windows Feature Enabled"
rule_id: 55c925c1-7195-426b-a136-a9396800e29b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Suspicious Windows Feature Enabled

## Description
Detects usage of the built-in PowerShell cmdlet "Enable-WindowsOptionalFeature" used as a Deployment Image Servicing and Management tool.
Similar to DISM.exe, this cmdlet is used to enumerate, install, uninstall, configure, and update features and packages in Windows images

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  ScriptBlockText|contains|all:
  - Enable-WindowsOptionalFeature
  - -Online
  - -FeatureName
selection_feature:
  ScriptBlockText|contains:
  - TelnetServer
  - Internet-Explorer-Optional-amd64
  - TFTP
  - SMB1Protocol
  - Client-ProjFS
  - Microsoft-Windows-Subsystem-Linux
```

## False Positives
- Legitimate usage of the features listed in the rule.

## References
- https://learn.microsoft.com/en-us/powershell/module/dism/enable-windowsoptionalfeature?view=windowsserver2022-ps
- https://learn.microsoft.com/en-us/windows/win32/projfs/enabling-windows-projected-file-system
- https://learn.microsoft.com/en-us/windows/wsl/install-on-server

## Metadata
- **Author:** frack113
- **Date:** 2022-09-10
- **Rule ID:** `55c925c1-7195-426b-a136-a9396800e29b`
- **Source file:** `windows/powershell/powershell_script/posh_ps_enable_susp_windows_optional_feature.yml`

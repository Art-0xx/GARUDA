---
type: detection_rule
title: "Suspicious Uninstall of Windows Defender Feature via PowerShell"
rule_id: c443012c-7928-43bf-ac20-7eda5efe61ad
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Suspicious Uninstall of Windows Defender Feature via PowerShell

## Description
Detects the use of PowerShell with Uninstall-WindowsFeature or Remove-WindowsFeature cmdlets to disable or remove the Windows Defender GUI feature, a common technique used by adversaries to evade defenses.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_defender_feature:
  CommandLine|contains: Windows-Defender
selection_cli_uninstall:
  CommandLine|contains:
  - Uninstall-WindowsFeature
  - Remove-WindowsFeature
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell_ISE.EXE
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1685

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/powershell/module/microsoft.windows.servermanager.migration/uninstall-windowsfeature
- https://thedfirreport.com/2023/04/03/malicious-iso-file-leads-to-domain-wide-ransomware

## Metadata
- **Author:** yxinmiracle
- **Date:** 2025-08-22
- **Rule ID:** `c443012c-7928-43bf-ac20-7eda5efe61ad`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_uninstall_defender_feature.yml`

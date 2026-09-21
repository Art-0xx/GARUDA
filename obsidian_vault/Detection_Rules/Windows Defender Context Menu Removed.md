---
type: detection_rule
title: "Windows Defender Context Menu Removed"
rule_id: b9e8c7d6-a5f4-4e3d-8b1a-9f0c8d7e6a5b
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Windows Defender Context Menu Removed

## Description
Detects the use of reg.exe or PowerShell to delete the Windows Defender context menu handler registry keys.
This action removes the "Scan with Microsoft Defender" option from the right-click menu for files, directories, and drives.
Attackers may use this technique to hinder manual, on-demand scans and reduce the visibility of the security product.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_action:
  CommandLine|contains:
  - del
  - Remove-Item
  - 'ri '
selection_img:
- Image|endswith:
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
- OriginalFileName:
  - powershell_ise.EXE
  - PowerShell.EXE
  - pwsh.dll
  - reg.exe
selection_reg_path:
  CommandLine|contains: \shellex\ContextMenuHandlers\EPP
```

## MITRE ATT&CK
- T1685

## False Positives
- May be part of a system customization or "debloating" script, but this is highly unusual in a managed corporate environment.

## References
- https://research.splunk.com/endpoint/395ed5fe-ad13-4366-9405-a228427bdd91/
- https://winaero.com/how-to-delete-scan-with-windows-defender-from-context-menu-in-windows-10/
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://blog.malwarebytes.com/malwarebytes-news/2021/02/lazyscripter-from-empire-to-double-rat/

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2025-07-09
- **Rule ID:** `b9e8c7d6-a5f4-4e3d-8b1a-9f0c8d7e6a5b`
- **Source file:** `windows/process_creation/proc_creation_win_defender_remove_context_menu.yml`

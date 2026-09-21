---
type: detection_rule
title: "Add Windows Capability Via PowerShell Cmdlet"
rule_id: b36d01a3-ddaf-4804-be18-18a6247adfcd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Add Windows Capability Via PowerShell Cmdlet

## Description
Detects usage of the "Add-WindowsCapability" cmdlet to add Windows capabilities. Notable capabilities could be "OpenSSH" and others.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_capa:
  CommandLine|contains: OpenSSH.
selection_cmdlet:
  CommandLine|contains: Add-WindowsCapability
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## False Positives
- Legitimate usage of the capabilities by administrators or users. Add additional filters accordingly.

## References
- https://learn.microsoft.com/en-us/windows-server/administration/openssh/openssh_install_firstuse?tabs=powershell
- https://www.virustotal.com/gui/file/af1c82237b6e5a3a7cdbad82cc498d298c67845d92971bada450023d1335e267/content

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-22
- **Rule ID:** `b36d01a3-ddaf-4804-be18-18a6247adfcd`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_add_windows_capability.yml`

---
type: detection_rule
title: "Potential Active Directory Enumeration Using AD Module - ProcCreation"
rule_id: 70bc5215-526f-4477-963c-a47a5c9ebd12
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Active Directory Enumeration Using AD Module - ProcCreation

## Description
Detects usage of the "Import-Module" cmdlet to load the "Microsoft.ActiveDirectory.Management.dl" DLL. Which is often used by attackers to perform AD enumeration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  CommandLine|contains:
  - 'Import-Module '
  - 'ipmo '
selection_dll:
  CommandLine|contains: Microsoft.ActiveDirectory.Management.dll
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## False Positives
- Legitimate use of the library for administrative activity

## References
- https://github.com/samratashok/ADModule
- https://twitter.com/cyb3rops/status/1617108657166061568?s=20
- https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/active-directory-enumeration-with-ad-module-without-rsat-or-admin-privileges

## Metadata
- **Author:** frack113
- **Date:** 2023-01-22
- **Rule ID:** `70bc5215-526f-4477-963c-a47a5c9ebd12`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_active_directory_module_dll_import.yml`

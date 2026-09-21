---
type: detection_rule
title: "Potential Active Directory Enumeration Using AD Module - PsScript"
rule_id: 9e620995-f2d8-4630-8430-4afd89f77604
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Active Directory Enumeration Using AD Module - PsScript

## Description
Detects usage of the "Import-Module" cmdlet to load the "Microsoft.ActiveDirectory.Management.dl" DLL. Which is often used by attackers to perform AD enumeration.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enable'
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_generic:
  ScriptBlockText|contains|all:
  - 'Import-Module '
  - Microsoft.ActiveDirectory.Management.dll
selection_specific:
  ScriptBlockText|contains: ipmo Microsoft.ActiveDirectory.Management.dll
```

## False Positives
- Legitimate use of the library for administrative activity

## References
- https://github.com/samratashok/ADModule
- https://twitter.com/cyb3rops/status/1617108657166061568?s=20
- https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/active-directory-enumeration-with-ad-module-without-rsat-or-admin-privileges

## Metadata
- **Author:** frack113, Nasreddine Bencherchali
- **Date:** 2023-01-22
- **Rule ID:** `9e620995-f2d8-4630-8430-4afd89f77604`
- **Source file:** `windows/powershell/powershell_script/posh_ps_active_directory_module_dll_import.yml`

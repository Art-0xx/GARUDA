---
type: detection_rule
title: "Potential Active Directory Enumeration Using AD Module - PsModule"
rule_id: 74176142-4684-4d8a-8b0a-713257e7df8e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential Active Directory Enumeration Using AD Module - PsModule

## Description
Detects usage of the "Import-Module" cmdlet to load the "Microsoft.ActiveDirectory.Management.dl" DLL. Which is often used by attackers to perform AD enumeration.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmdlet:
  Payload|contains:
  - 'Import-Module '
  - 'ipmo '
selection_dll:
  Payload|contains: Microsoft.ActiveDirectory.Management.dll
```

## False Positives
- Legitimate use of the library for administrative activity

## References
- https://github.com/samratashok/ADModule
- https://twitter.com/cyb3rops/status/1617108657166061568?s=20
- https://www.ired.team/offensive-security-experiments/active-directory-kerberos-abuse/active-directory-enumeration-with-ad-module-without-rsat-or-admin-privileges

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2023-01-22
- **Rule ID:** `74176142-4684-4d8a-8b0a-713257e7df8e`
- **Source file:** `windows/powershell/powershell_module/posh_pm_active_directory_module_dll_import.yml`

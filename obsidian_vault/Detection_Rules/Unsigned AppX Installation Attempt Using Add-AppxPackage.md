---
type: detection_rule
title: "Unsigned AppX Installation Attempt Using Add-AppxPackage"
rule_id: 37651c2a-42cd-4a69-ae0d-22a4349aa04a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Unsigned AppX Installation Attempt Using Add-AppxPackage

## Description
Detects usage of the "Add-AppxPackage" or it's alias "Add-AppPackage" to install unsigned AppX packages

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
  - 'Add-AppPackage '
  - 'Add-AppxPackage '
selection_flag:
  CommandLine|contains: ' -AllowUnsigned'
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## False Positives
- Installation of unsigned packages for testing purposes

## References
- https://learn.microsoft.com/en-us/windows/msix/package/unsigned-package
- https://twitter.com/WindowsDocs/status/1620078135080325122

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-31
- **Rule ID:** `37651c2a-42cd-4a69-ae0d-22a4349aa04a`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_install_unsigned_appx_packages.yml`

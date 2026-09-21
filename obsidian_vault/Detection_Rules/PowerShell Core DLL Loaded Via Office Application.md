---
type: detection_rule
title: "PowerShell Core DLL Loaded Via Office Application"
rule_id: bb2ba6fb-95d4-4a25-89fc-30bb736c021a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# PowerShell Core DLL Loaded Via Office Application

## Description
Detects PowerShell core DLL being loaded by an Office Product

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|contains:
  - \System.Management.Automation.Dll
  - \System.Management.Automation.ni.Dll
  Image|endswith:
  - \excel.exe
  - \mspub.exe
  - \outlook.exe
  - \onenote.exe
  - \onenoteim.exe
  - \powerpnt.exe
  - \winword.exe
```

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-01
- **Rule ID:** `bb2ba6fb-95d4-4a25-89fc-30bb736c021a`
- **Source file:** `windows/image_load/image_load_office_powershell_dll_load.yml`

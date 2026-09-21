---
type: detection_rule
title: "Amsi.DLL Loaded Via LOLBIN Process"
rule_id: 6ec86d9e-912e-4726-91a2-209359b999b9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Amsi.DLL Loaded Via LOLBIN Process

## Description
Detects loading of "Amsi.dll" by a living of the land process. This could be an indication of a "PowerShell without PowerShell" attack

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|endswith: \amsi.dll
  Image|endswith:
  - \ExtExport.exe
  - \odbcconf.exe
  - \rundll32.exe
```

## False Positives
- Unknown

## References
- Internal Research
- https://www.paloaltonetworks.com/blog/security-operations/stopping-powershell-without-powershell/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-01
- **Rule ID:** `6ec86d9e-912e-4726-91a2-209359b999b9`
- **Source file:** `windows/image_load/image_load_dll_amsi_suspicious_process.yml`

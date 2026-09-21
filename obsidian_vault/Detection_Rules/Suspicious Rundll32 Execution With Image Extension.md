---
type: detection_rule
title: "Suspicious Rundll32 Execution With Image Extension"
rule_id: 4aa6040b-3f28-44e3-a769-9208e5feb5ec
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Suspicious Rundll32 Execution With Image Extension

## Description
Detects the execution of Rundll32.exe with DLL files masquerading as image files

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - .bmp
  - .cr2
  - .eps
  - .gif
  - .ico
  - .jpeg
  - .jpg
  - .nef
  - .orf
  - .png
  - .raw
  - .sr2
  - .tif
  - .tiff
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.exe
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution

## Metadata
- **Author:** Hieu Tran
- **Date:** 2023-03-13
- **Rule ID:** `4aa6040b-3f28-44e3-a769-9208e5feb5ec`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_susp_execution_with_image_extension.yml`

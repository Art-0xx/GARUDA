---
type: detection_rule
title: "Regsvr32 DLL Execution With Suspicious File Extension"
rule_id: 089fc3d2-71e8-4763-a8a5-c97fbb0a403e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.010]
---

# Regsvr32 DLL Execution With Suspicious File Extension

## Description
Detects the execution of REGSVR32.exe with DLL files masquerading as other files

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|endswith:
  - .bin
  - .bmp
  - .cr2
  - .dat
  - .eps
  - .gif
  - .ico
  - .jpeg
  - .jpg
  - .log
  - .nef
  - .orf
  - .png
  - .raw
  - .rtf
  - .sr2
  - .temp
  - .tif
  - .tiff
  - .tmp
  - .txt
selection_img:
- Image|endswith: \regsvr32.exe
- OriginalFileName: REGSVR32.EXE
```

## MITRE ATT&CK
- T1218.010

## False Positives
- Unlikely

## References
- https://thedfirreport.com/2021/11/29/continuing-the-bazar-ransomware-story/
- https://blog.talosintelligence.com/2021/10/threat-hunting-in-large-datasets-by.html
- https://guides.lib.umich.edu/c.php?g=282942&p=1885348
- https://harfanglab.io/insidethelab/uac-0057-pressure-ukraine-poland/

## Metadata
- **Author:** Florian Roth (Nextron Systems), frack113
- **Date:** 2021-11-29
- **Rule ID:** `089fc3d2-71e8-4763-a8a5-c97fbb0a403e`
- **Source file:** `windows/process_creation/proc_creation_win_regsvr32_susp_extensions.yml`

---
type: detection_rule
title: "Suspicious File Characteristics Due to Missing Fields"
rule_id: 9637e8a5-7131-4f7f-bdc7-2b05d8670c43
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.006]
---

# Suspicious File Characteristics Due to Missing Fields

## Description
Detects Executables in the Downloads folder without FileVersion,Description,Product,Company likely created with py2exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (selection1 or selection2 or selection3) and folder
folder:
  Image|contains: \Downloads\
selection1:
  Description: \?
  FileVersion: \?
selection2:
  Description: \?
  Product: \?
selection3:
  Company: \?
  Description: \?
```

## MITRE ATT&CK
- T1059.006

## False Positives
- Unknown

## References
- https://securelist.com/muddywater/88059/
- https://www.virustotal.com/#/file/276a765a10f98cda1a38d3a31e7483585ca3722ecad19d784441293acf1b7beb/detection

## Metadata
- **Author:** Markus Neis, Sander Wiebing
- **Date:** 2018-11-22
- **Rule ID:** `9637e8a5-7131-4f7f-bdc7-2b05d8670c43`
- **Source file:** `windows/process_creation/proc_creation_win_susp_file_characteristics.yml`

---
type: detection_rule
title: "Cscript/Wscript Uncommon Script Extension Execution"
rule_id: 99b7460d-c9f1-40d7-a316-1f36f61d52ee
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005, attack.t1059.007]
---

# Cscript/Wscript Uncommon Script Extension Execution

## Description
Detects Wscript/Cscript executing a file with an uncommon (i.e. non-script) extension

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_extension:
  CommandLine|contains:
  - .csv
  - .dat
  - .doc
  - .gif
  - .jpeg
  - .jpg
  - .png
  - .ppt
  - .txt
  - .xls
  - .xml
selection_img:
- OriginalFileName:
  - wscript.exe
  - cscript.exe
- Image|endswith:
  - \wscript.exe
  - \cscript.exe
```

## MITRE ATT&CK
- T1059.005
- T1059.007

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-15
- **Rule ID:** `99b7460d-c9f1-40d7-a316-1f36f61d52ee`
- **Source file:** `windows/process_creation/proc_creation_win_wscript_cscript_uncommon_extension_exec.yml`

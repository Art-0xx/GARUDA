---
type: detection_rule
title: "Potentially Suspicious Execution From Parent Process In Public Folder"
rule_id: 69bd9b97-2be2-41b6-9816-fb08757a4d1a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564, attack.t1059]
---

# Potentially Suspicious Execution From Parent Process In Public Folder

## Description
Detects a potentially suspicious execution of a parent process located in the "\Users\Public" folder executing a child process containing references to shell or scripting binaries and commandlines.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- Image|endswith:
  - \bitsadmin.exe
  - \certutil.exe
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- CommandLine|contains:
  - bitsadmin
  - certutil
  - cscript
  - mshta
  - powershell
  - regsvr32
  - rundll32
  - wscript
selection_parent:
  ParentImage|contains: :\Users\Public\
```

## MITRE ATT&CK
- T1564
- T1059

## False Positives
- Unknown

## References
- https://redcanary.com/blog/blackbyte-ransomware/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-02-25
- **Rule ID:** `69bd9b97-2be2-41b6-9816-fb08757a4d1a`
- **Source file:** `windows/process_creation/proc_creation_win_susp_execution_from_public_folder_as_parent.yml`

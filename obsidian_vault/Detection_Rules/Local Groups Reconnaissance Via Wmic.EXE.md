---
type: detection_rule
title: "Local Groups Reconnaissance Via Wmic.EXE"
rule_id: 164eda96-11b2-430b-85ff-6a265c15bf32
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1069.001]
---

# Local Groups Reconnaissance Via Wmic.EXE

## Description
Detects the execution of "wmic" with the "group" flag.
Adversaries may attempt to find local system groups and permission settings.
The knowledge of local system permission groups can help adversaries determine which groups exist and which users belong to a particular group.
Adversaries may use this information to determine which users have elevated permissions, such as the users found within the local administrators group.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains: ' group'
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1069.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1069.001/T1069.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-12-12
- **Rule ID:** `164eda96-11b2-430b-85ff-6a265c15bf32`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_group.yml`

---
type: detection_rule
title: "Compress Data and Lock With Password for Exfiltration With 7-ZIP"
rule_id: 9fbf5927-5261-4284-a71d-f681029ea574
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# Compress Data and Lock With Password for Exfiltration With 7-ZIP

## Description
An adversary may compress or encrypt data that is collected prior to exfiltration using 3rd party utilities

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_action:
  CommandLine|contains:
  - ' a '
  - ' u '
selection_img:
- Description|contains: 7-Zip
- Image|endswith:
  - \7z.exe
  - \7zr.exe
  - \7za.exe
- OriginalFileName:
  - 7z.exe
  - 7za.exe
  - 7zr.exe
selection_password:
  CommandLine|contains: ' -p'
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Legitimate activity is expected since compressing files with a password is common.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1560.001/T1560.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-27
- **Rule ID:** `9fbf5927-5261-4284-a71d-f681029ea574`
- **Source file:** `windows/process_creation/proc_creation_win_7zip_password_compression.yml`

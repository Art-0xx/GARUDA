---
type: detection_rule
title: "7Zip Compressing Dump Files"
rule_id: ec570e53-4c76-45a9-804d-dc3f355ff7a7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# 7Zip Compressing Dump Files

## Description
Detects execution of 7z in order to compress a file with a ".dmp"/".dump" extension, which could be a step in a process of dump file exfiltration.

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
  - .dmp
  - .dump
  - .hdmp
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
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Legitimate use of 7z with a command line in which ".dmp" or ".dump" appears accidentally
- Legitimate use of 7z to compress WER ".dmp" files for troubleshooting

## References
- https://thedfirreport.com/2022/09/26/bumblebee-round-two/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-27
- **Rule ID:** `ec570e53-4c76-45a9-804d-dc3f355ff7a7`
- **Source file:** `windows/process_creation/proc_creation_win_7zip_exfil_dmp_files.yml`

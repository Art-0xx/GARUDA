---
type: detection_rule
title: "Computer System Reconnaissance Via Wmic.EXE"
rule_id: 9d7ca793-f6bd-471c-8d0f-11e68b2f0d2f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Computer System Reconnaissance Via Wmic.EXE

## Description
Detects execution of wmic utility with the "computersystem" flag in order to obtain information about the machine such as the domain, username, model, etc.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: computersystem
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://www.microsoft.com/security/blog/2022/09/07/profiling-dev-0270-phosphorus-ransomware-operations/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-08
- **Rule ID:** `9d7ca793-f6bd-471c-8d0f-11e68b2f0d2f`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_computersystem.yml`

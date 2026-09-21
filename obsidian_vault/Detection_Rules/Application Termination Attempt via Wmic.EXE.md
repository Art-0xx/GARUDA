---
type: detection_rule
title: "Application Termination Attempt via Wmic.EXE"
rule_id: 49d9671b-0a0a-4c09-8280-d215bfd30662
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Application Termination Attempt via Wmic.EXE

## Description
Detects an attempt to terminate a process via "wmic" with the "call terminate" flag. Adversaries may
use wmic to terminate security products or other applications on the compromised host. This event is
triggered on on attempt and process creation can be either successful or unsuccessful.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - call
  - terminate
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://cyble.com/blog/lockfile-ransomware-using-proxyshell-attack-to-deploy-ransomware/
- https://www.bitdefender.com/files/News/CaseStudies/study/377/Bitdefender-Whitepaper-WMI-creat4871-en-EN-GenericUse.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-11
- **Rule ID:** `49d9671b-0a0a-4c09-8280-d215bfd30662`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_terminate_application.yml`

---
type: detection_rule
title: "Compressed File Creation Via Tar.EXE"
rule_id: 418a3163-3247-4b7b-9933-dcfcb7c52ea9
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560, attack.t1560.001]
---

# Compressed File Creation Via Tar.EXE

## Description
Detects execution of "tar.exe" in order to create a compressed file.
Adversaries may abuse various utilities to compress or encrypt data before exfiltration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_create:
  CommandLine|contains:
  - -c
  - -r
  - -u
selection_img:
- Image|endswith: \tar.exe
- OriginalFileName: bsdtar
```

## MITRE ATT&CK
- T1560
- T1560.001

## False Positives
- Likely

## References
- https://unit42.paloaltonetworks.com/chromeloader-malware/
- https://lolbas-project.github.io/lolbas/Binaries/Tar/
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/cicada-apt10-japan-espionage

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), AdmU3
- **Date:** 2023-12-19
- **Rule ID:** `418a3163-3247-4b7b-9933-dcfcb7c52ea9`
- **Source file:** `windows/process_creation/proc_creation_win_tar_compression.yml`

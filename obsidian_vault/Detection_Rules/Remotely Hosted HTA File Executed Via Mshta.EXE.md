---
type: detection_rule
title: "Remotely Hosted HTA File Executed Via Mshta.EXE"
rule_id: b98d0db6-511d-45de-ad02-e82a98729620
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.005]
---

# Remotely Hosted HTA File Executed Via Mshta.EXE

## Description
Detects execution of the "mshta" utility with an argument containing the "http" keyword, which could indicate that an attacker is executing a remotely hosted malicious hta file

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - http://
  - https://
  - ftp://
selection_img:
- Image|endswith: \mshta.exe
- OriginalFileName: MSHTA.EXE
```

## MITRE ATT&CK
- T1218.005

## False Positives
- Unknown

## References
- https://www.trendmicro.com/en_us/research/22/e/avoslocker-ransomware-variant-abuses-driver-file-to-disable-anti-Virus-scans-log4shell.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-08
- **Rule ID:** `b98d0db6-511d-45de-ad02-e82a98729620`
- **Source file:** `windows/process_creation/proc_creation_win_mshta_http.yml`

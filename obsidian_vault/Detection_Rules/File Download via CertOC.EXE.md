---
type: detection_rule
title: "File Download via CertOC.EXE"
rule_id: 70ad0861-d1fe-491c-a45f-fa48148a300d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# File Download via CertOC.EXE

## Description
Detects when a user downloads a file by using CertOC.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains|all:
  - -GetCACAPS
  - http
selection_img:
- Image|endswith: \certoc.exe
- OriginalFileName: CertOC.exe
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Certoc/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-05-16
- **Rule ID:** `70ad0861-d1fe-491c-a45f-fa48148a300d`
- **Source file:** `windows/process_creation/proc_creation_win_certoc_download.yml`

---
type: detection_rule
title: "File Download From IP Based URL Via CertOC.EXE"
rule_id: b86f6dea-0b2f-41f5-bdcc-a057bd19cd6a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1105]
---

# File Download From IP Based URL Via CertOC.EXE

## Description
Detects when a user downloads a file from an IP based URL using CertOC.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains: -GetCACAPS
selection_img:
- Image|endswith: \certoc.exe
- OriginalFileName: CertOC.exe
selection_ip:
  CommandLine|re: ://[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}
```

## MITRE ATT&CK
- T1105

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Certoc/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-10-18
- **Rule ID:** `b86f6dea-0b2f-41f5-bdcc-a057bd19cd6a`
- **Source file:** `windows/process_creation/proc_creation_win_certoc_download_direct_ip.yml`

---
type: detection_rule
title: "Suspicious Service Binary Directory"
rule_id: 883faa95-175a-4e22-8181-e5761aeb373c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Suspicious Service Binary Directory

## Description
Detects a service binary running in a suspicious directory

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - \Users\Public\
  - \$Recycle.bin
  - \Users\All Users\
  - \Users\Default\
  - \Users\Contacts\
  - \Users\Searches\
  - C:\Perflogs\
  - \config\systemprofile\
  - \Windows\Fonts\
  - \Windows\IME\
  - \Windows\addins\
  ParentImage|endswith:
  - \services.exe
  - \svchost.exe
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- https://blog.truesec.com/2021/03/07/exchange-zero-day-proxylogon-and-hafnium/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-03-09
- **Rule ID:** `883faa95-175a-4e22-8181-e5761aeb373c`
- **Source file:** `windows/process_creation/proc_creation_win_susp_service_dir.yml`

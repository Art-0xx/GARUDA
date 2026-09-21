---
type: detection_rule
title: "XBAP Execution From Uncommon Locations Via PresentationHost.EXE"
rule_id: d22e2925-cfd8-463f-96f6-89cec9d9bc5f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# XBAP Execution From Uncommon Locations Via PresentationHost.EXE

## Description
Detects the execution of ".xbap" (Browser Applications) files via PresentationHost.EXE from an uncommon location. These files can be abused to run malicious ".xbap" files any bypass AWL

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection* and not 1 of filter_main_*
filter_main_generic:
  CommandLine|contains:
  - ' C:\Windows\'
  - ' C:\Program Files'
selection_cli:
  CommandLine|contains: .xbap
selection_img:
- Image|endswith: \presentationhost.exe
- OriginalFileName: PresentationHost.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Legitimate ".xbap" being executed via "PresentationHost"

## References
- https://lolbas-project.github.io/lolbas/Binaries/Presentationhost/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-01
- **Rule ID:** `d22e2925-cfd8-463f-96f6-89cec9d9bc5f`
- **Source file:** `windows/process_creation/proc_creation_win_presentationhost_uncommon_location_exec.yml`

---
type: detection_rule
title: "Potentially Suspicious Execution Of Regasm/Regsvcs With Uncommon Extension"
rule_id: e9f8f8cc-07cc-4e81-b724-f387db9175e4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.009]
---

# Potentially Suspicious Execution Of Regasm/Regsvcs With Uncommon Extension

## Description
Detects potentially suspicious execution of the Regasm/Regsvcs utilities with an uncommon extension.

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
  - .dat
  - .gif
  - .jpeg
  - .jpg
  - .png
  - .txt
selection_img:
- Image|endswith:
  - \Regsvcs.exe
  - \Regasm.exe
- OriginalFileName:
  - RegSvcs.exe
  - RegAsm.exe
```

## MITRE ATT&CK
- T1218.009

## False Positives
- Unknown

## References
- https://www.fortiguard.com/threat-signal-report/4718?s=09
- https://lolbas-project.github.io/lolbas/Binaries/Regasm/
- https://lolbas-project.github.io/lolbas/Binaries/Regsvcs/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-13
- **Rule ID:** `e9f8f8cc-07cc-4e81-b724-f387db9175e4`
- **Source file:** `windows/process_creation/proc_creation_win_regasm_regsvcs_uncommon_extension_execution.yml`

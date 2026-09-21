---
type: detection_rule
title: "Uncommon Extension Shim Database Installation Via Sdbinst.EXE"
rule_id: 18ee686c-38a3-4f65-9f44-48a077141f42
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.011]
---

# Uncommon Extension Shim Database Installation Via Sdbinst.EXE

## Description
Detects installation of a potentially suspicious new shim with an uncommon extension using sdbinst.exe.
Adversaries may establish persistence and/or elevate privileges by executing malicious content triggered by application shims

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_empty:
  CommandLine: ''
filter_main_legit_ext:
  CommandLine|contains: .sdb
filter_main_legit_extensions:
- CommandLine|endswith:
  - ' -c'
  - ' -f'
  - ' -mm'
  - ' -t'
- CommandLine|contains: ' -m -bg'
filter_main_null:
  CommandLine: null
selection:
- Image|endswith: \sdbinst.exe
- OriginalFileName: sdbinst.exe
```

## MITRE ATT&CK
- T1546.011

## False Positives
- Unknown

## References
- https://www.fireeye.com/blog/threat-research/2017/05/fin7-shim-databases-persistence.html
- https://github.com/nasbench/Misc-Research/blob/8ee690e43a379cbce8c9d61107442c36bd9be3d3/Other/Undocumented-Flags-Sdbinst.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-01
- **Rule ID:** `18ee686c-38a3-4f65-9f44-48a077141f42`
- **Source file:** `windows/process_creation/proc_creation_win_sdbinst_susp_extension.yml`

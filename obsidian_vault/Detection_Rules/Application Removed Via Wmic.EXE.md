---
type: detection_rule
title: "Application Removed Via Wmic.EXE"
rule_id: b53317a0-8acf-4fd1-8de8-a5401e776b96
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Application Removed Via Wmic.EXE

## Description
Detects the removal or uninstallation of an application via "Wmic.EXE".

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
  - uninstall
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1047/T1047.md#atomic-test-10---application-uninstall-using-wmic

## Metadata
- **Author:** frack113
- **Date:** 2022-01-28
- **Rule ID:** `b53317a0-8acf-4fd1-8de8-a5401e776b96`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_uninstall_application.yml`

---
type: detection_rule
title: "WMIC Remote Command Execution"
rule_id: 7773b877-5abb-4a3e-b9c9-fd0369b59b00
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# WMIC Remote Command Execution

## Description
Detects the execution of WMIC to query information on a remote system

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_localhost:
  CommandLine|contains:
  - localhost
  - 127.0.0.1
selection_cli:
  CommandLine|contains|windash: '/node:'
selection_img:
- Image|endswith: \WMIC.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://securelist.com/moonbounce-the-dark-side-of-uefi-firmware/105468/
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/wmic

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-14
- **Rule ID:** `7773b877-5abb-4a3e-b9c9-fd0369b59b00`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_remote_execution.yml`

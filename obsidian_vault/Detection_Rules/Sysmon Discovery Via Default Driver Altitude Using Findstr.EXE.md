---
type: detection_rule
title: "Sysmon Discovery Via Default Driver Altitude Using Findstr.EXE"
rule_id: 37db85d1-b089-490a-a59a-c7b6f984f480
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1518.001]
---

# Sysmon Discovery Via Default Driver Altitude Using Findstr.EXE

## Description
Detects usage of "findstr" with the argument "385201". Which could indicate potential discovery of an installed Sysinternals Sysmon service using the default driver altitude (even if the name is changed).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ' 385201'
selection_img:
- Image|endswith:
  - \find.exe
  - \findstr.exe
- OriginalFileName:
  - FIND.EXE
  - FINDSTR.EXE
```

## MITRE ATT&CK
- T1518.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1518.001/T1518.001.md#atomic-test-5---security-software-discovery---sysmon-service

## Metadata
- **Author:** frack113
- **Date:** 2021-12-16
- **Rule ID:** `37db85d1-b089-490a-a59a-c7b6f984f480`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_sysmon_discovery_via_default_altitude.yml`

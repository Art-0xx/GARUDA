---
type: detection_rule
title: "Potential Configuration And Service Reconnaissance Via Reg.EXE"
rule_id: 970007b7-ce32-49d0-a4a4-fbef016950bd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1012, attack.t1007]
---

# Potential Configuration And Service Reconnaissance Via Reg.EXE

## Description
Detects the usage of "reg.exe" in order to query reconnaissance information from the registry. Adversaries may interact with the Windows registry to gather information about credentials, the system, configuration, and installed software.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flag:
  CommandLine|contains: query
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_key:
  CommandLine|contains:
  - currentVersion\windows
  - winlogon\
  - currentVersion\shellServiceObjectDelayLoad
  - currentVersion\run
  - currentVersion\policies\explorer\run
  - currentcontrolset\services
```

## MITRE ATT&CK
- T1012
- T1007

## False Positives
- Discord

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1012/T1012.md

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `970007b7-ce32-49d0-a4a4-fbef016950bd`
- **Source file:** `windows/process_creation/proc_creation_win_reg_query_registry.yml`

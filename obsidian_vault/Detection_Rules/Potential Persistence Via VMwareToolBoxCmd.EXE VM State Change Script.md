---
type: detection_rule
title: "Potential Persistence Via VMwareToolBoxCmd.EXE VM State Change Script"
rule_id: 7aa4e81a-a65c-4e10-9f81-b200eb229d7d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Potential Persistence Via VMwareToolBoxCmd.EXE VM State Change Script

## Description
Detects execution of the "VMwareToolBoxCmd.exe" with the "script" and "set" flag to setup a specific script to run for a specific VM state

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
  - ' script '
  - ' set '
selection_img:
- Image|endswith: \VMwareToolBoxCmd.exe
- OriginalFileName: toolbox-cmd.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://bohops.com/2021/10/08/analyzing-and-detecting-a-vmtools-persistence-technique/
- https://www.hexacorn.com/blog/2017/01/14/beyond-good-ol-run-key-part-53/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-14
- **Rule ID:** `7aa4e81a-a65c-4e10-9f81-b200eb229d7d`
- **Source file:** `windows/process_creation/proc_creation_win_vmware_toolbox_cmd_persistence.yml`

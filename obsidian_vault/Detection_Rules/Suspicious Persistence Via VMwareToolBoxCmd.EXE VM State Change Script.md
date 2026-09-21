---
type: detection_rule
title: "Suspicious Persistence Via VMwareToolBoxCmd.EXE VM State Change Script"
rule_id: 236d8e89-ed95-4789-a982-36f4643738ba
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Suspicious Persistence Via VMwareToolBoxCmd.EXE VM State Change Script

## Description
Detects execution of the "VMwareToolBoxCmd.exe" with the "script" and "set" flag to setup a specific script that's located in a potentially suspicious location to run for a specific VM state

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_bin_cli:
  CommandLine|contains|all:
  - ' script '
  - ' set '
selection_bin_img:
- Image|endswith: \VMwareToolBoxCmd.exe
- OriginalFileName: toolbox-cmd.exe
selection_susp_paths:
  CommandLine|contains:
  - :\PerfLogs\
  - :\Temp\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
  - :\Windows\Temp\
  - \AppData\Local\Temp
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://bohops.com/2021/10/08/analyzing-and-detecting-a-vmtools-persistence-technique/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-06-14
- **Rule ID:** `236d8e89-ed95-4789-a982-36f4643738ba`
- **Source file:** `windows/process_creation/proc_creation_win_vmware_toolbox_cmd_persistence_susp.yml`

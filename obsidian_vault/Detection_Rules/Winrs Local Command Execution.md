---
type: detection_rule
title: "Winrs Local Command Execution"
rule_id: bcfece3d-56fe-4545-9931-3b8e92927db1
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.006, attack.t1218]
---

# Winrs Local Command Execution

## Description
Detects the execution of Winrs.exe where it is used to execute commands locally.
Commands executed this way are launched under Winrshost.exe and can represent proxy execution used for defense evasion or lateral movement.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* or (selection_img and not 1 of filter_main_*)
filter_main_remote:
  CommandLine|contains|windash:
  - '/r:'
  - '/remote:'
selection_img:
- Image|endswith: \winrs.exe
- OriginalFileName: winrs.exe
selection_local_ip:
  CommandLine|contains|windash:
  - /r:localhost
  - /r:127.0.0.1
  - /r:[::1]
  - /remote:localhost
  - /remote:127.0.0.1
  - /remote:[::1]
```

## MITRE ATT&CK
- T1021.006
- T1218

## False Positives
- Unlikely

## References
- https://cardinalops.com/blog/living-off-winrm-abusing-complexity-in-remote-management/
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/winrs

## Metadata
- **Author:** Liran Ravich, Nasreddine Bencherchali
- **Date:** 2025-10-22
- **Rule ID:** `bcfece3d-56fe-4545-9931-3b8e92927db1`
- **Source file:** `windows/process_creation/proc_creation_win_winrs_local_command_execution.yml`

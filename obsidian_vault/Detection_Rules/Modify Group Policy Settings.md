---
type: detection_rule
title: "Modify Group Policy Settings"
rule_id: ada4b0c4-758b-46ac-9033-9004613a150d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1484.001]
---

# Modify Group Policy Settings

## Description
Detect malicious GPO modifications can be used to implement many other malicious behaviors.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_key:
  CommandLine|contains:
  - GroupPolicyRefreshTimeDC
  - GroupPolicyRefreshTimeOffsetDC
  - GroupPolicyRefreshTime
  - GroupPolicyRefreshTimeOffset
  - EnableSmartScreen
  - ShellSmartScreenLevel
selection_path:
  CommandLine|contains: \SOFTWARE\Policies\Microsoft\Windows\System
selection_reg:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1484.001

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/40b77d63808dd4f4eafb83949805636735a1fd15/atomics/T1484.001/T1484.001.md

## Metadata
- **Author:** frack113
- **Date:** 2022-08-19
- **Rule ID:** `ada4b0c4-758b-46ac-9033-9004613a150d`
- **Source file:** `windows/process_creation/proc_creation_win_reg_modify_group_policy_settings.yml`

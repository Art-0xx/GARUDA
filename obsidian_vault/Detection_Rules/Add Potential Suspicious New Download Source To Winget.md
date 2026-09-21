---
type: detection_rule
title: "Add Potential Suspicious New Download Source To Winget"
rule_id: c15a46a0-07d4-4c87-b4b6-89207835a83b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Add Potential Suspicious New Download Source To Winget

## Description
Detects usage of winget to add new potentially suspicious download sources

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
  - 'source '
  - 'add '
selection_img:
- Image|endswith: \winget.exe
- OriginalFileName: winget.exe
selection_source_direct_ip:
  CommandLine|re: ://\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows/package-manager/winget/source
- https://github.com/nasbench/Misc-Research/tree/b9596e8109dcdb16ec353f316678927e507a5b8d/LOLBINs/Winget

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-17
- **Rule ID:** `c15a46a0-07d4-4c87-b4b6-89207835a83b`
- **Source file:** `windows/process_creation/proc_creation_win_winget_add_susp_custom_source.yml`

---
type: detection_rule
title: "Add Insecure Download Source To Winget"
rule_id: 81a0ecb5-0a41-4ba1-b2ba-c944eb92bfa2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Add Insecure Download Source To Winget

## Description
Detects usage of winget to add a new insecure (http) download source.
Winget will not allow the addition of insecure sources, hence this could indicate potential suspicious activity (or typos)

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
  - http://
selection_img:
- Image|endswith: \winget.exe
- OriginalFileName: winget.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- False positives might occur if the users are unaware of such control checks

## References
- https://learn.microsoft.com/en-us/windows/package-manager/winget/source
- https://github.com/nasbench/Misc-Research/tree/b9596e8109dcdb16ec353f316678927e507a5b8d/LOLBINs/Winget

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-17
- **Rule ID:** `81a0ecb5-0a41-4ba1-b2ba-c944eb92bfa2`
- **Source file:** `windows/process_creation/proc_creation_win_winget_add_insecure_custom_source.yml`

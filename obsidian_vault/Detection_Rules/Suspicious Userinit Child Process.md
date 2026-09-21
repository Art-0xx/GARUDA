---
type: detection_rule
title: "Suspicious Userinit Child Process"
rule_id: b655a06a-31c0-477a-95c2-3726b83d649d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# Suspicious Userinit Child Process

## Description
Detects a suspicious child process of userinit

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_explorer:
- Image|endswith: \explorer.exe
- OriginalFileName: explorer.exe
- CommandLine: C:\Windows\Explorer.EXE
filter_main_netlogon:
  CommandLine|contains: \netlogon\
filter_main_null:
  Image: null
selection:
  ParentImage|endswith: \userinit.exe
```

## MITRE ATT&CK
- T1055

## False Positives
- Administrative scripts

## References
- https://twitter.com/SBousseaden/status/1139811587760562176

## Metadata
- **Author:** Florian Roth (Nextron Systems), Samir Bousseaden (idea)
- **Date:** 2019-06-17
- **Rule ID:** `b655a06a-31c0-477a-95c2-3726b83d649d`
- **Source file:** `windows/process_creation/proc_creation_win_susp_userinit_child.yml`

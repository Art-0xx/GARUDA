---
type: detection_rule
title: "Wusa.EXE Executed By Parent Process Located In Suspicious Location"
rule_id: ef64fc9c-a45e-43cc-8fd8-7d75d73b4c99
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Wusa.EXE Executed By Parent Process Located In Suspicious Location

## Description
Detects execution of the "wusa.exe" (Windows Update Standalone Installer) utility by a parent process that is located in a suspicious location.
Attackers could instantiate an instance of "wusa.exe" in order to bypass User Account Control (UAC). They can duplicate the access token from "wusa.exe" to gain elevated privileges.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_paths_* and not 1 of filter_main_*
filter_main_msu:
  CommandLine|contains: .msu
selection_img:
  Image|endswith: \wusa.exe
selection_paths_1:
  ParentImage|contains:
  - :\Perflogs\
  - :\Users\Public\
  - :\Windows\Temp\
  - \Appdata\Local\Temp\
  - \Temporary Internet
selection_paths_2:
- ParentImage|contains|all:
  - :\Users\
  - \Favorites\
- ParentImage|contains|all:
  - :\Users\
  - \Favourites\
- ParentImage|contains|all:
  - :\Users\
  - \Contacts\
- ParentImage|contains|all:
  - :\Users\
  - \Pictures\
```

## False Positives
- Unknown

## References
- https://www.fortinet.com/blog/threat-research/konni-campaign-distributed-via-malicious-document

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-11-26
- **Rule ID:** `ef64fc9c-a45e-43cc-8fd8-7d75d73b4c99`
- **Source file:** `windows/process_creation/proc_creation_win_wusa_susp_parent_execution.yml`

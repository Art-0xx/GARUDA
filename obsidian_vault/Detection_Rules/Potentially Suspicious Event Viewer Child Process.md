---
type: detection_rule
title: "Potentially Suspicious Event Viewer Child Process"
rule_id: be344333-921d-4c4d-8bb8-e584cf584780
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# Potentially Suspicious Event Viewer Child Process

## Description
Detects uncommon or suspicious child processes of "eventvwr.exe" which might indicate a UAC bypass attempt

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_generic:
  Image|endswith:
  - :\Windows\System32\mmc.exe
  - :\Windows\System32\WerFault.exe
  - :\Windows\SysWOW64\WerFault.exe
selection:
  ParentImage|endswith: \eventvwr.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://enigma0x3.net/2016/08/15/fileless-uac-bypass-using-eventvwr-exe-and-registry-hijacking/
- https://www.hybrid-analysis.com/sample/e122bc8bf291f15cab182a5d2d27b8db1e7019e4e96bb5cdbd1dfe7446f3f51f?environmentId=100

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-19
- **Rule ID:** `be344333-921d-4c4d-8bb8-e584cf584780`
- **Source file:** `windows/process_creation/proc_creation_win_eventvwr_susp_child_process.yml`

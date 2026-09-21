---
type: detection_rule
title: "Renamed BOINC Client Execution"
rule_id: 30d07da2-83ab-45d8-ae75-ec7c0edcaffc
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1553]
---

# Renamed BOINC Client Execution

## Description
Detects the execution of a renamed BOINC binary.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_name:
  Image|endswith: \BOINC.exe
selection:
  OriginalFileName: BOINC.exe
```

## MITRE ATT&CK
- T1553

## False Positives
- Unknown

## References
- https://boinc.berkeley.edu/
- https://www.virustotal.com/gui/file/91e405e8a527023fb8696624e70498ae83660fe6757cef4871ce9bcc659264d3/details
- https://www.huntress.com/blog/fake-browser-updates-lead-to-boinc-volunteer-computing-software

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2024-07-23
- **Rule ID:** `30d07da2-83ab-45d8-ae75-ec7c0edcaffc`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_boinc.yml`

---
type: detection_rule
title: "Uncommon Child Process Of Conhost.EXE"
rule_id: 7dc2dedd-7603-461a-bc13-15803d132355
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Uncommon Child Process Of Conhost.EXE

## Description
Detects uncommon "conhost" child processes. This could be a sign of "conhost" usage as a LOLBIN or potential process injection activity.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_conhost:
  Image|endswith: :\Windows\System32\conhost.exe
filter_main_empty:
  Image: ''
filter_main_null:
  Image: null
filter_optional_provider:
  Provider_Name: SystemTraceProvider-Process
selection:
  ParentImage|endswith: \conhost.exe
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- http://www.hexacorn.com/blog/2020/05/25/how-to-con-your-host/

## Metadata
- **Author:** omkar72
- **Date:** 2020-10-25
- **Rule ID:** `7dc2dedd-7603-461a-bc13-15803d132355`
- **Source file:** `windows/process_creation/proc_creation_win_conhost_susp_child_process.yml`

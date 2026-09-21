---
type: detection_rule
title: "Suspicious Control Panel DLL Load"
rule_id: d7eb979b-c2b5-4a6f-a3a7-c87ce6763819
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Suspicious Control Panel DLL Load

## Description
Detects suspicious Rundll32 execution from control.exe as used by Equation Group and Exploit Kits

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not filter
filter:
  CommandLine|contains: Shell32.dll
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
selection_parent:
  ParentImage|endswith: \System32\control.exe
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://twitter.com/rikvduijn/status/853251879320662017
- https://twitter.com/felixw3000/status/853354851128025088

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-04-15
- **Rule ID:** `d7eb979b-c2b5-4a6f-a3a7-c87ce6763819`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_susp_control_dll_load.yml`

---
type: detection_rule
title: "Shell32 DLL Execution in Suspicious Directory"
rule_id: 32b96012-7892-429e-b26c-ac2bf46066ff
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Shell32 DLL Execution in Suspicious Directory

## Description
Detects shell32.dll executing a DLL in a suspicious directory

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - '%AppData%'
  - '%LocalAppData%'
  - '%Temp%'
  - '%tmp%'
  - \AppData\
  - \Temp\
  - \Users\Public\
  CommandLine|contains|all:
  - shell32.dll
  - Control_RunDLL
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://www.group-ib.com/resources/threat-research/red-curl-2.html

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-11-24
- **Rule ID:** `32b96012-7892-429e-b26c-ac2bf46066ff`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_shell32_susp_execution.yml`

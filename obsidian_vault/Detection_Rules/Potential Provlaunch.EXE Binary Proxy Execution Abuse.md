---
type: detection_rule
title: "Potential Provlaunch.EXE Binary Proxy Execution Abuse"
rule_id: 7f5d1c9a-3e83-48df-95a7-2b98aae6c13c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potential Provlaunch.EXE Binary Proxy Execution Abuse

## Description
Detects child processes of "provlaunch.exe" which might indicate potential abuse to proxy execution.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_covered_children:
- Image|endswith:
  - \calc.exe
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \notepad.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- Image|contains:
  - :\PerfLogs\
  - :\Temp\
  - :\Users\Public\
  - \AppData\Temp\
  - \Windows\System32\Tasks\
  - \Windows\Tasks\
  - \Windows\Temp\
selection:
  ParentImage|endswith: \provlaunch.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Provlaunch/
- https://twitter.com/0gtweet/status/1674399582162153472

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel
- **Date:** 2023-08-08
- **Rule ID:** `7f5d1c9a-3e83-48df-95a7-2b98aae6c13c`
- **Source file:** `windows/process_creation/proc_creation_win_provlaunch_potential_abuse.yml`

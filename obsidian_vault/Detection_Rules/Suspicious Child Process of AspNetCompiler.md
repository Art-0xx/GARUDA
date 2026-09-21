---
type: detection_rule
title: "Suspicious Child Process of AspNetCompiler"
rule_id: 9ccba514-7cb6-4c5c-b377-700758f2f120
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127]
---

# Suspicious Child Process of AspNetCompiler

## Description
Detects potentially suspicious child processes of "aspnet_compiler.exe".

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- Image|endswith:
  - \calc.exe
  - \notepad.exe
- Image|contains:
  - \Users\Public\
  - \AppData\Local\Temp\
  - \AppData\Local\Roaming\
  - :\Temp\
  - :\Windows\Temp\
  - :\Windows\System32\Tasks\
  - :\Windows\Tasks\
selection_parent:
  ParentImage|endswith: \aspnet_compiler.exe
```

## MITRE ATT&CK
- T1127

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Aspnet_Compiler/
- https://ijustwannared.team/2020/08/01/the-curious-case-of-aspnet_compiler-exe/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-14
- **Rule ID:** `9ccba514-7cb6-4c5c-b377-700758f2f120`
- **Source file:** `windows/process_creation/proc_creation_win_aspnet_compiler_susp_child_process.yml`

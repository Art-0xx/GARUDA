---
type: detection_rule
title: "Potential Rundll32 Execution With DLL Stored In ADS"
rule_id: 9248c7e1-2bf3-4661-a22c-600a8040b446
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Potential Rundll32 Execution With DLL Stored In ADS

## Description
Detects execution of rundll32 where the DLL being called is stored in an Alternate Data Stream (ADS).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|re: '[Rr][Uu][Nn][Dd][Ll][Ll]32(?:\.[Ee][Xx][Ee])? \S+?\w:\S+?:'
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Rundll32

## Metadata
- **Author:** Harjot Singh, '@cyb3rjy0t'
- **Date:** 2023-01-21
- **Rule ID:** `9248c7e1-2bf3-4661-a22c-600a8040b446`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_ads_stored_dll_execution.yml`

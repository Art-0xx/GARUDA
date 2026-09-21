---
type: detection_rule
title: "Suspicious Execution of InstallUtil Without Log"
rule_id: d042284c-a296-4988-9be5-f424fadcc28c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Execution of InstallUtil Without Log

## Description
Uses the .NET InstallUtil.exe application in order to execute image without log

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - '/logfile= '
  - /LogToConsole=false
  Image|contains: Microsoft.NET\Framework
  Image|endswith: \InstallUtil.exe
```

## False Positives
- Unknown

## References
- https://securelist.com/moonbounce-the-dark-side-of-uefi-firmware/105468/
- https://learn.microsoft.com/en-us/dotnet/framework/tools/installutil-exe-installer-tool

## Metadata
- **Author:** frack113
- **Date:** 2022-01-23
- **Rule ID:** `d042284c-a296-4988-9be5-f424fadcc28c`
- **Source file:** `windows/process_creation/proc_creation_win_instalutil_no_log_execution.yml`

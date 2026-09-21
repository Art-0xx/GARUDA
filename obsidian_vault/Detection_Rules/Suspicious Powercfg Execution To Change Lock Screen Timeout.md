---
type: detection_rule
title: "Suspicious Powercfg Execution To Change Lock Screen Timeout"
rule_id: f8d6a15e-4bc8-4c27-8e5d-2b10f0b73e5b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Suspicious Powercfg Execution To Change Lock Screen Timeout

## Description
Detects suspicious execution of 'Powercfg.exe' to change lock screen timeout

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_power:
- Image|endswith: \powercfg.exe
- OriginalFileName: PowerCfg.exe
selection_standby:
- CommandLine|contains|all:
  - '/setacvalueindex '
  - SCHEME_CURRENT
  - SUB_VIDEO
  - VIDEOCONLOCK
- CommandLine|contains|all:
  - '-change '
  - -standby-timeout-
```

## False Positives
- Unknown

## References
- https://blogs.vmware.com/security/2022/11/batloader-the-evasive-downloader-malware.html
- https://learn.microsoft.com/en-us/windows-hardware/design/device-experiences/powercfg-command-line-options

## Metadata
- **Author:** frack113
- **Date:** 2022-11-18
- **Rule ID:** `f8d6a15e-4bc8-4c27-8e5d-2b10f0b73e5b`
- **Source file:** `windows/process_creation/proc_creation_win_powercfg_execution.yml`

---
type: detection_rule
title: "Renamed PsExec Service Execution"
rule_id: 51ae86a2-e2e1-4097-ad85-c46cb6851de4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Renamed PsExec Service Execution

## Description
Detects suspicious launch of a renamed version of the PSEXESVC service with, which is not often used by legitimate administrators

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image: C:\Windows\PSEXESVC.exe
selection:
  OriginalFileName: psexesvc.exe
```

## False Positives
- Legitimate administrative tasks

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/psexec
- https://www.youtube.com/watch?v=ro2QuZTIMBM

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `51ae86a2-e2e1-4097-ad85-c46cb6851de4`
- **Source file:** `windows/process_creation/proc_creation_win_renamed_sysinternals_psexec_service.yml`

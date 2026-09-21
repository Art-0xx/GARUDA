---
type: detection_rule
title: "Suspicious Execution of Systeminfo"
rule_id: 0ef56343-059e-4cb6-adc1-4c3c967c5e46
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082]
---

# Suspicious Execution of Systeminfo

## Description
Detects usage of the "systeminfo" command to retrieve information

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \systeminfo.exe
- OriginalFileName: sysinfo.exe
```

## MITRE ATT&CK
- T1082

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1082/T1082.md#atomic-test-1---system-information-discovery
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/systeminfo

## Metadata
- **Author:** frack113
- **Date:** 2022-01-01
- **Rule ID:** `0ef56343-059e-4cb6-adc1-4c3c967c5e46`
- **Source file:** `windows/process_creation/proc_creation_win_systeminfo_execution.yml`

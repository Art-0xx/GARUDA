---
type: detection_rule
title: "Suspicious Scheduled Task Write to System32 Tasks"
rule_id: 80e1f67a-4596-4351-98f5-a9c3efabac95
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053]
---

# Suspicious Scheduled Task Write to System32 Tasks

## Description
Detects the creation of tasks from processes executed from suspicious locations

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - \AppData\
  - C:\PerfLogs
  - \Windows\System32\config\systemprofile
  TargetFilename|contains: \Windows\System32\Tasks
```

## MITRE ATT&CK
- T1053

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-11-16
- **Rule ID:** `80e1f67a-4596-4351-98f5-a9c3efabac95`
- **Source file:** `windows/file/file_event/file_event_win_susp_task_write.yml`

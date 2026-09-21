---
type: detection_rule
title: "Suspicious Scheduled Task Creation Involving Temp Folder"
rule_id: 39019a4e-317f-4ce3-ae63-309a8c6b53c5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Suspicious Scheduled Task Creation Involving Temp Folder

## Description
Detects the creation of scheduled tasks that involves a temporary folder and runs only once

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
  - ' /create '
  - ' /sc once '
  - \Temp\
  Image|endswith: \schtasks.exe
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Administrative activity
- Software installation

## References
- https://discuss.elastic.co/t/detection-and-response-for-hafnium-activity/266289/3

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-03-11
- **Rule ID:** `39019a4e-317f-4ce3-ae63-309a8c6b53c5`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_creation_temp_folder.yml`

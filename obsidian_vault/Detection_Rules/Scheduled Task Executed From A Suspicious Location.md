---
type: detection_rule
title: "Scheduled Task Executed From A Suspicious Location"
rule_id: 424273ea-7cf8-43a6-b712-375f925e481f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Scheduled Task Executed From A Suspicious Location

## Description
Detects the execution of Scheduled Tasks where the Program being run is located in a suspicious location or it's an unusale program to be run from a Scheduled Task

## Log Source
```yaml
definition: 'Requirements: The "Microsoft-Windows-TaskScheduler/Operational" is disabled
  by default and needs to be enabled in order for this detection to trigger'
product: windows
service: taskscheduler
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 129
  Path|contains:
  - C:\Windows\Temp\
  - \AppData\Local\Temp\
  - \Desktop\
  - \Downloads\
  - \Users\Public\
  - C:\Temp\
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-05
- **Rule ID:** `424273ea-7cf8-43a6-b712-375f925e481f`
- **Source file:** `windows/builtin/taskscheduler/win_taskscheduler_execution_from_susp_locations.yml`

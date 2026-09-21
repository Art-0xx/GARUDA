---
type: detection_rule
title: "Scheduled Task Executed Uncommon LOLBIN"
rule_id: f0767f15-0fb3-44b9-851e-e8d9a6d0005d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Scheduled Task Executed Uncommon LOLBIN

## Description
Detects the execution of Scheduled Tasks where the program being run is located in a suspicious location or where it is an unusual program to be run from a Scheduled Task

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
  Path|endswith:
  - \calc.exe
  - \cscript.exe
  - \mshta.exe
  - \mspaint.exe
  - \notepad.exe
  - \regsvr32.exe
  - \wscript.exe
```

## MITRE ATT&CK
- T1053.005

## False Positives
- False positives may occur with some of the selected binaries if you have tasks using them (which could be very common in your environment). Exclude all the specific trusted tasks before using this rule

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-12-05
- **Rule ID:** `f0767f15-0fb3-44b9-851e-e8d9a6d0005d`
- **Source file:** `windows/builtin/taskscheduler/win_taskscheduler_lolbin_execution_via_task_scheduler.yml`

---
type: detection_rule
title: "Suspicious Windows Trace ETW Session Tamper Via Logman.EXE"
rule_id: cd1f961e-0b96-436b-b7c6-38da4583ec00
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685, attack.t1685.005]
---

# Suspicious Windows Trace ETW Session Tamper Via Logman.EXE

## Description
Detects the execution of "logman" utility in order to disable or delete Windows trace sessions

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_action:
  CommandLine|contains:
  - 'stop '
  - 'delete '
selection_img:
- Image|endswith: \logman.exe
- OriginalFileName: Logman.exe
selection_service:
  CommandLine|contains:
  - Circular Kernel Context Logger
  - EventLog-
  - SYSMON TRACE
  - SysmonDnsEtwSession
```

## MITRE ATT&CK
- T1685
- T1685.005

## False Positives
- Legitimate deactivation by administrative staff
- Installer tools that disable services, e.g. before log collection agent installation

## References
- https://twitter.com/0gtweet/status/1359039665232306183?s=21
- https://ss64.com/nt/logman.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-02-11
- **Rule ID:** `cd1f961e-0b96-436b-b7c6-38da4583ec00`
- **Source file:** `windows/process_creation/proc_creation_win_logman_disable_eventlog.yml`

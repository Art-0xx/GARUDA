---
type: detection_rule
title: "Whoami.EXE Execution Anomaly"
rule_id: 8de1cbe8-d6f5-496d-8237-5f44a721c7a0
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1033]
---

# Whoami.EXE Execution Anomaly

## Description
Detects the execution of whoami.exe with suspicious parent processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_known_parents:
  ParentImage|endswith:
  - \cmd.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
filter_main_parent_empty:
  ParentImage:
  - ''
  - '-'
filter_main_parent_null:
  ParentImage: null
filter_optional_ms_monitoring_agent:
  ParentImage|endswith: :\Program Files\Microsoft Monitoring Agent\Agent\MonitoringHost.exe
selection:
- Image|endswith: \whoami.exe
- OriginalFileName: whoami.exe
```

## MITRE ATT&CK
- T1033

## False Positives
- Admin activity
- Scripts and administrative tools used in the monitored environment
- Monitoring activity

## References
- https://brica.de/alerts/alert/public/1247926/agent-tesla-keylogger-delivered-inside-a-power-iso-daa-archive/
- https://app.any.run/tasks/7eaba74e-c1ea-400f-9c17-5e30eee89906/
- https://www.youtube.com/watch?v=DsJ9ByX84o4&t=6s

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-08-12
- **Rule ID:** `8de1cbe8-d6f5-496d-8237-5f44a721c7a0`
- **Source file:** `windows/process_creation/proc_creation_win_whoami_parent_anomaly.yml`

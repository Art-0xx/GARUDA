---
type: detection_rule
title: "WMI Persistence - Script Event Consumer File Write"
rule_id: 33f41cdd-35ac-4ba8-814b-c6a4244a1ad4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# WMI Persistence - Script Event Consumer File Write

## Description
Detects file writes of WMI script event consumer

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image: C:\WINDOWS\system32\wbem\scrcons.exe
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Dell Power Manager (C:\Program Files\Dell\PowerManager\DpmPowerPlanSetup.exe)

## References
- https://www.eideon.com/2018-03-02-THL03-WMIBackdoors/

## Metadata
- **Author:** Thomas Patzke
- **Date:** 2018-03-07
- **Rule ID:** `33f41cdd-35ac-4ba8-814b-c6a4244a1ad4`
- **Source file:** `windows/file/file_event/file_event_win_wmi_persistence_script_event_consumer_write.yml`

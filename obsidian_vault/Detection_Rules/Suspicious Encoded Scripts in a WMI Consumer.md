---
type: detection_rule
title: "Suspicious Encoded Scripts in a WMI Consumer"
rule_id: 83844185-1c5b-45bc-bcf3-b5bf3084ca5b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1546.003]
---

# Suspicious Encoded Scripts in a WMI Consumer

## Description
Detects suspicious encoded payloads in WMI Event Consumers

## Log Source
```yaml
category: wmi_event
product: windows
```

## Detection Logic
```yaml
condition: selection_destination
selection_destination:
  Destination|base64offset|contains:
  - WriteProcessMemory
  - This program cannot be run in DOS mode
  - This program must be run under Win32
```

## MITRE ATT&CK
- T1047
- T1546.003

## False Positives
- Unknown

## References
- https://github.com/RiccardoAncarani/LiquidSnake

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-09-01
- **Rule ID:** `83844185-1c5b-45bc-bcf3-b5bf3084ca5b`
- **Source file:** `windows/wmi_event/sysmon_wmi_susp_encoded_scripts.yml`

---
type: detection_rule
title: "ProcessHacker Privilege Elevation"
rule_id: c4ff1eac-84ad-44dd-a6fb-d56a92fc43a9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003, attack.t1569.002]
---

# ProcessHacker Privilege Elevation

## Description
Detects a ProcessHacker tool that elevated privileges to a very high level

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  AccountName: LocalSystem
  EventID: 7045
  Provider_Name: Service Control Manager
  ServiceName|startswith: ProcessHacker
```

## MITRE ATT&CK
- T1543.003
- T1569.002

## False Positives
- Unlikely

## References
- https://twitter.com/1kwpeter/status/1397816101455765504

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-05-27
- **Rule ID:** `c4ff1eac-84ad-44dd-a6fb-d56a92fc43a9`
- **Source file:** `windows/builtin/system/service_control_manager/win_system_service_install_pua_proceshacker.yml`

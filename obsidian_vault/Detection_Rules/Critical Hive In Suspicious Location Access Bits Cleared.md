---
type: detection_rule
title: "Critical Hive In Suspicious Location Access Bits Cleared"
rule_id: 39f919f3-980b-4e6f-a975-8af7e507ef2b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002]
---

# Critical Hive In Suspicious Location Access Bits Cleared

## Description
Detects events from the Kernel-General ETW indicating that the access bits of a hive with a system like hive name located in the temp directory have been reset.
This occurs when an application tries to access a hive and the hive has not be recognized since the last 7 days (by default).
Registry hive dumping utilities such as QuarksPwDump were seen emitting this behavior.

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 16
  HiveName|contains:
  - \Temp\SAM
  - \Temp\SECURITY
  Provider_Name: Microsoft-Windows-Kernel-General
```

## MITRE ATT&CK
- T1003.002

## False Positives
- Unknown

## References
- https://github.com/nasbench/Misc-Research/blob/b20da2336de0f342d31ef4794959d28c8d3ba5ba/ETW/Microsoft-Windows-Kernel-General.md

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-05-15
- **Rule ID:** `39f919f3-980b-4e6f-a975-8af7e507ef2b`
- **Source file:** `windows/builtin/system/microsoft_windows_kernel_general/win_system_susp_critical_hive_location_access_bits_cleared.yml`

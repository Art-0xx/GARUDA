---
type: detection_rule
title: "Failed Event Log Clear Via WMI NTEventLogFile ClearEventLog"
rule_id: d4f1a2b3-7c8e-4d5f-b6a9-1e0c2d3f4e5b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.005]
---

# Failed Event Log Clear Via WMI NTEventLogFile ClearEventLog

## Description
Detects failed attempts to clear Windows event logs via the WMI NTEventLogFile ClearEventLog method.
Event 5858 in the WMI-Activity operational log is an error event, meaning it is only generated
when the WMI operation encounters an error (e.g. access denied, provider failure).
It could be an indication of an attacker attempting to clear event logs via WMI, but failing due to insufficient privileges or other issues.
Successful clearing operations will NOT produce this event; for those, correlate with
Security event 1102 or System event 104.

## Log Source
```yaml
product: windows
service: wmi
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 5858
  Operation|contains|all:
  - Win32_NTEventlogFile
  - cleareventlog
```

## MITRE ATT&CK
- T1685.005

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows/win32/cimwin32prov/cleareventlog-method-in-class-win32-nteventlogfile

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-07-01
- **Rule ID:** `d4f1a2b3-7c8e-4d5f-b6a9-1e0c2d3f4e5b`
- **Source file:** `windows/builtin/wmi/win_wmi_activity_nteventlogfile_cleareventlog.yml`

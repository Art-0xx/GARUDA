---
type: detection_rule
title: "Eventlog Cleared"
rule_id: a62b37e0-45d3-48d9-a517-90c1a1b0186b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.005]
---

# Eventlog Cleared

## Description
One of the Windows Eventlogs has been cleared. e.g. caused by "wevtutil cl" command execution

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_covered:
  Channel:
  - Microsoft-Windows-PowerShell/Operational
  - Microsoft-Windows-Sysmon/Operational
  - PowerShellCore/Operational
  - Security
  - System
  - Windows PowerShell
selection:
  EventID: 104
  Provider_Name: Microsoft-Windows-Eventlog
```

## MITRE ATT&CK
- T1685.005

## False Positives
- Rollout of log collection agents (the setup routine often includes a reset of the local Eventlog)
- System provisioning (system reset before the golden image creation)

## References
- https://twitter.com/deviouspolack/status/832535435960209408
- https://www.hybrid-analysis.com/sample/027cc450ef5f8c5f653329641ec1fed91f694e0d229928963b30f6b0d7d3a745?environmentId=100

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-01-10
- **Rule ID:** `a62b37e0-45d3-48d9-a517-90c1a1b0186b`
- **Source file:** `windows/builtin/system/microsoft_windows_eventlog/win_system_eventlog_cleared.yml`

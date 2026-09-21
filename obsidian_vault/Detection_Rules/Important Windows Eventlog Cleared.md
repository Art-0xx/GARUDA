---
type: detection_rule
title: "Important Windows Eventlog Cleared"
rule_id: 100ef69e-3327-481c-8e5c-6d80d9507556
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.005]
---

# Important Windows Eventlog Cleared

## Description
Detects the clearing of one of the Windows Core Eventlogs. e.g. caused by "wevtutil cl" command execution

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection
selection:
  Channel:
  - Microsoft-Windows-PowerShell/Operational
  - Microsoft-Windows-Sysmon/Operational
  - PowerShellCore/Operational
  - Security
  - System
  - Windows PowerShell
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
- **Author:** Florian Roth (Nextron Systems), Tim Shelton, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-05-17
- **Rule ID:** `100ef69e-3327-481c-8e5c-6d80d9507556`
- **Source file:** `windows/builtin/system/microsoft_windows_eventlog/win_system_susp_eventlog_cleared.yml`

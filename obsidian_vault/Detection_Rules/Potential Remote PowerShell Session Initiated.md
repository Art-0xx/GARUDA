---
type: detection_rule
title: "Potential Remote PowerShell Session Initiated"
rule_id: c539afac-c12a-46ed-b1bd-5a5567c9f045
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1021.006]
---

# Potential Remote PowerShell Session Initiated

## Description
Detects a process that initiated a network connection over ports 5985 or 5986 from a non-network service account.
This could potentially indicates a remote PowerShell connection.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_localhost:
  DestinationIp:
  - ::1
  - 127.0.0.1
  SourceIp:
  - ::1
  - 127.0.0.1
filter_main_service_users:
- User|contains:
  - NETWORK SERVICE
  - NETZWERKDIENST
  - SERVICIO DE RED
  - SERVIZIO DI RETE
- User|contains|all:
  - SERVICE R
  - SEAU
filter_optional_avast:
  Image:
  - C:\Program Files\Avast Software\Avast\AvastSvc.exe
  - C:\Program Files (x86)\Avast Software\Avast\AvastSvc.exe
selection:
  DestinationPort:
  - 5985
  - 5986
  Initiated: 'true'
  SourceIsIpv6: 'false'
```

## MITRE ATT&CK
- T1059.001
- T1021.006

## False Positives
- Legitimate usage of remote PowerShell, e.g. remote administration and monitoring.
- Network Service user name of a not-covered localization

## References
- https://threathunterplaybook.com/hunts/windows/190511-RemotePwshExecution/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-09-12
- **Rule ID:** `c539afac-c12a-46ed-b1bd-5a5567c9f045`
- **Source file:** `windows/network_connection/net_connection_win_susp_remote_powershell_session.yml`

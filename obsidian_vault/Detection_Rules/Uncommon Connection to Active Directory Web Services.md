---
type: detection_rule
title: "Uncommon Connection to Active Directory Web Services"
rule_id: b3ad3c0f-c949-47a1-a30e-b0491ccae876
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1087]
---

# Uncommon Connection to Active Directory Web Services

## Description
Detects uncommon network connections to the Active Directory Web Services (ADWS) from processes not typically associated with ADWS management.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_dsac:
  Image: C:\Windows\system32\dsac.exe
filter_main_ms_monitoring_agent:
  Image: C:\Program Files\Microsoft Monitoring Agent\
filter_main_powershell:
  Image|startswith:
  - C:\Program Files\PowerShell\7\pwsh.exe
  - C:\Program Files\PowerShell\7-preview\pwsh.ex
  - C:\Windows\System32\WindowsPowerShell\
  - C:\Windows\SysWOW64\WindowsPowerShell\
selection:
  DestinationPort: 9389
  Initiated: true
```

## MITRE ATT&CK
- T1087

## False Positives
- ADWS is used by a number of legitimate applications that need to interact with Active Directory. These applications should be added to the allow-listing to avoid false positives.

## References
- https://medium.com/falconforce/soaphound-tool-to-collect-active-directory-data-via-adws-165aca78288c
- https://github.com/FalconForceTeam/FalconFriday/blob/a9219dfcfd89836f34660223f47d766982bdce46/Discovery/ADWS_Connection_from_Unexpected_Binary-Win.md

## Metadata
- **Author:** @kostastsale
- **Date:** 2024-01-26
- **Rule ID:** `b3ad3c0f-c949-47a1-a30e-b0491ccae876`
- **Source file:** `windows/network_connection/net_connection_win_adws_unusual_connection.yml`

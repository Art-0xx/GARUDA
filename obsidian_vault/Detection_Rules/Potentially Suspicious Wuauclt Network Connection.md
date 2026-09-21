---
type: detection_rule
title: "Potentially Suspicious Wuauclt Network Connection"
rule_id: c649a6c7-cd8c-4a78-9c04-000fc76df954
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potentially Suspicious Wuauclt Network Connection

## Description
Detects the use of the Windows Update Client binary (wuauclt.exe) to proxy execute code and making network connections.
One could easily make the DLL spawn a new process and inject to it to proxy the network connection and bypass this rule.

## Log Source
```yaml
category: network_connection
definition: 'Requirements: The CommandLine field enrichment is required in order for
  this rule to be used.'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_cli_empty:
  CommandLine: ''
filter_main_cli_null:
  CommandLine: null
filter_main_ip:
  DestinationIp|cidr:
  - 127.0.0.0/8
  - 10.0.0.0/8
  - 169.254.0.0/16
  - 172.16.0.0/12
  - 192.168.0.0/16
  - ::1/128
  - fe80::/10
  - fc00::/7
filter_main_msrange:
  DestinationIp|cidr:
  - 20.184.0.0/13
  - 20.192.0.0/10
  - 23.79.0.0/16
  - 51.10.0.0/15
  - 51.103.0.0/16
  - 51.104.0.0/15
  - 52.224.0.0/11
filter_main_uus:
  CommandLine|contains:
  - :\Windows\UUS\Packages\Preview\amd64\updatedeploy.dll /ClassId
  - :\Windows\UUS\amd64\UpdateDeploy.dll /ClassId
filter_main_winsxs:
  CommandLine|contains|all:
  - :\Windows\WinSxS\
  - '\UpdateDeploy.dll /ClassId '
selection:
  CommandLine|contains: ' /RunHandlerComServer'
  Image|contains: wuauclt
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://dtm.uk/wuauclt/

## Metadata
- **Author:** Roberto Rodriguez (Cyb3rWard0g), OTR (Open Threat Research)
- **Date:** 2020-10-12
- **Rule ID:** `c649a6c7-cd8c-4a78-9c04-000fc76df954`
- **Source file:** `windows/network_connection/net_connection_win_wuauclt_network_connection.yml`

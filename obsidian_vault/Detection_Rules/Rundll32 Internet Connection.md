---
type: detection_rule
title: "Rundll32 Internet Connection"
rule_id: cdc8da7d-c303-42f8-b08c-b4ab47230263
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Rundll32 Internet Connection

## Description
Detects a rundll32 that communicates with public IP addresses

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_app_sdb:
  CommandLine|endswith: \system32\PcaSvc.dll,PcaPatchSdbTask
filter_main_azure_managed:
  SourceHostname|endswith: .internal.cloudapp.net
filter_main_local_ranges:
  DestinationIp|cidr:
  - 127.0.0.0/8
  - 10.0.0.0/8
  - 172.16.0.0/12
  - 192.168.0.0/16
  - 169.254.0.0/16
  - ::1/128
  - fe80::/10
  - fc00::/7
filter_main_ms_ranges:
  DestinationIp|cidr:
  - 20.0.0.0/8
  - 51.103.0.0/16
  - 51.104.0.0/16
  - 51.105.0.0/16
filter_main_svchost_update_processes:
  DestinationPort: 443
  ParentImage: C:\Windows\System32\svchost.exe
selection:
  Image|endswith: \rundll32.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Communication to other corporate systems that use IP addresses from public address spaces

## References
- https://www.hybrid-analysis.com/sample/759fb4c0091a78c5ee035715afe3084686a8493f39014aea72dae36869de9ff6?environmentId=100

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-11-04
- **Rule ID:** `cdc8da7d-c303-42f8-b08c-b4ab47230263`
- **Source file:** `windows/network_connection/net_connection_win_rundll32_net_connections.yml`

---
type: detection_rule
title: "Outbound Network Connection Initiated By Cmstp.EXE"
rule_id: efafe0bf-4238-479e-af8f-797bd3490d2d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.003]
---

# Outbound Network Connection Initiated By Cmstp.EXE

## Description
Detects a network connection initiated by Cmstp.EXE
Its uncommon for "cmstp.exe" to initiate an outbound network connection. Investigate the source of such requests to determine if they are malicious.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
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
selection:
  Image|endswith: \cmstp.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1218.003

## False Positives
- Unknown

## References
- https://web.archive.org/web/20190720093911/http://www.endurant.io/cmstp/detecting-cmstp-enabled-code-execution-and-uac-bypass-with-sysmon/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-30
- **Rule ID:** `efafe0bf-4238-479e-af8f-797bd3490d2d`
- **Source file:** `windows/network_connection/net_connection_win_cmstp_initiated_connection.yml`

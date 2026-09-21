---
type: detection_rule
title: "RegAsm.EXE Initiating Network Connection To Public IP"
rule_id: 0531e43a-d77d-47c2-b89f-5fe50321c805
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.009]
---

# RegAsm.EXE Initiating Network Connection To Public IP

## Description
Detects "RegAsm.exe" initiating a network connection to public IP adresses

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
  Image|endswith: \regasm.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1218.009

## False Positives
- Unknown

## References
- https://app.any.run/tasks/ec207948-4916-47eb-a0f4-4c6abb2e7668/
- https://research.splunk.com/endpoint/07921114-6db4-4e2e-ae58-3ea8a52ae93f/
- https://lolbas-project.github.io/lolbas/Binaries/Regasm/

## Metadata
- **Author:** frack113
- **Date:** 2024-04-25
- **Rule ID:** `0531e43a-d77d-47c2-b89f-5fe50321c805`
- **Source file:** `windows/network_connection/net_connection_win_regasm_network_activity.yml`

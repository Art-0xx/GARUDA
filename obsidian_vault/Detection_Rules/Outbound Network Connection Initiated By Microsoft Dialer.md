---
type: detection_rule
title: "Outbound Network Connection Initiated By Microsoft Dialer"
rule_id: 37e4024a-6c80-4d8f-b95d-2e7e94f3a8d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001]
---

# Outbound Network Connection Initiated By Microsoft Dialer

## Description
Detects outbound network connection initiated by Microsoft Dialer.
The Microsoft Dialer, also known as Phone Dialer, is a built-in utility application included in various versions of the Microsoft Windows operating system. Its primary function is to provide users with a graphical interface for managing phone calls via a modem or a phone line connected to the computer.
This is an outdated process in the current conext of it's usage and is a common target for info stealers for process injection, and is used to make C2 connections, common example is "Rhadamanthys"

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
  Image|endswith: :\Windows\System32\dialer.exe
  Initiated: 'true'
```

## MITRE ATT&CK
- T1071.001

## False Positives
- In Modern Windows systems, unable to see legitimate usage of this process, However, if an organization has legitimate purpose for this there can be false positives.

## References
- https://tria.ge/240301-rk34sagf5x/behavioral2
- https://app.any.run/tasks/6720b85b-9c53-4a12-b1dc-73052a78477d
- https://research.checkpoint.com/2023/rhadamanthys-v0-5-0-a-deep-dive-into-the-stealers-components/
- https://strontic.github.io/xcyclopedia/library/dialer.exe-0B69655F912619756C704A0BF716B61F.html

## Metadata
- **Author:** CertainlyP
- **Date:** 2024-04-26
- **Rule ID:** `37e4024a-6c80-4d8f-b95d-2e7e94f3a8d1`
- **Source file:** `windows/network_connection/net_connection_win_dialer_initiated_connection.yml`

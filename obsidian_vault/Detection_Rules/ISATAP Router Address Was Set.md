---
type: detection_rule
title: "ISATAP Router Address Was Set"
rule_id: d22df9cd-2aee-4089-93c7-9dc4eae77f2c
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1557, attack.t1565.002]
---

# ISATAP Router Address Was Set

## Description
Detects the configuration of a new ISATAP router on a Windows host. While ISATAP is a legitimate Microsoft technology for IPv6 transition, unexpected or unauthorized ISATAP router configurations could indicate a potential IPv6 DNS Takeover attack using tools like mitm6.
In such attacks, adversaries advertise themselves as DHCPv6 servers and set malicious ISATAP routers to intercept traffic.
This detection should be correlated with network baselines and known legitimate ISATAP deployments in your environment.

## Log Source
```yaml
product: windows
service: system
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_localhost:
  IsatapRouter:
  - 127.0.0.1
  - ::1
filter_optional_null:
  IsatapRouter: null
selection:
  EventID: 4100
  Provider_Name: Microsoft-Windows-Iphlpsvc
```

## MITRE ATT&CK
- T1557
- T1565.002

## False Positives
- Legitimate ISATAP router configuration in enterprise environments
- IPv6 transition projects and network infrastructure changes
- Network administrators configuring dual-stack networking
- Automatic ISATAP configuration in some Windows deployments

## References
- https://www.blackhillsinfosec.com/mitm6-strikes-again-the-dark-side-of-ipv6/
- https://redfoxsec.com/blog/ipv6-dns-takeover/
- https://www.securityhq.com/blog/malicious-isatap-tunneling-unearthed-on-windows-server/
- https://medium.com/@ninnesoturan/detecting-ipv6-dns-takeover-a54a6a88be1f

## Metadata
- **Author:** hamid
- **Date:** 2025-10-19
- **Rule ID:** `d22df9cd-2aee-4089-93c7-9dc4eae77f2c`
- **Source file:** `windows/builtin/system/microsoft_windows_Iphlpsvc/win_system_isatap_router_address_set.yml`

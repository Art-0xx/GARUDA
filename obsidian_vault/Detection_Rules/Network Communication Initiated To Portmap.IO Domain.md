---
type: detection_rule
title: "Network Communication Initiated To Portmap.IO Domain"
rule_id: 07837ab9-60e1-481f-a74d-c31fb496a94c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1041, attack.t1090.002]
---

# Network Communication Initiated To Portmap.IO Domain

## Description
Detects an executable accessing the portmap.io domain, which could be a sign of forbidden C2 traffic or data exfiltration by malicious actors

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|endswith: .portmap.io
  Initiated: 'true'
```

## MITRE ATT&CK
- T1041
- T1090.002

## False Positives
- Legitimate use of portmap.io domains

## References
- https://portmap.io/
- https://github.com/rapid7/metasploit-framework/issues/11337
- https://pro.twitter.com/JaromirHorejsi/status/1795001037746761892/photo/2

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2024-05-31
- **Rule ID:** `07837ab9-60e1-481f-a74d-c31fb496a94c`
- **Source file:** `windows/network_connection/net_connection_win_domain_portmap.yml`

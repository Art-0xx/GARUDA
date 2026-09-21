---
type: detection_rule
title: "RDP Over Reverse SSH Tunnel"
rule_id: 5f699bc5-5446-4a4a-a0b7-5ef2885a3eb4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1572, attack.t1021.001]
---

# RDP Over Reverse SSH Tunnel

## Description
Detects svchost hosting RDP termsvcs communicating with the loopback address and on TCP port 3389

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_destination:
  DestinationIp|cidr:
  - 127.0.0.0/8
  - ::1/128
selection_img:
  Image|endswith: \svchost.exe
  Initiated: 'true'
  SourcePort: 3389
```

## MITRE ATT&CK
- T1572
- T1021.001

## False Positives
- Unknown

## References
- https://twitter.com/cyb3rops/status/1096842275437625346

## Metadata
- **Author:** Samir Bousseaden
- **Date:** 2019-02-16
- **Rule ID:** `5f699bc5-5446-4a4a-a0b7-5ef2885a3eb4`
- **Source file:** `windows/network_connection/net_connection_win_rdp_reverse_tunnel.yml`

---
type: detection_rule
title: "Network Connection Initiated To DevTunnels Domain"
rule_id: 9501f8e6-8e3d-48fc-a8a6-1089dd5d7ef4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.001, attack.t1572]
---

# Network Connection Initiated To DevTunnels Domain

## Description
Detects network connections to Devtunnels domains initiated by a process on a system. Attackers can abuse that feature to establish a reverse shell or persistence on a machine.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|endswith: .devtunnels.ms
  Initiated: 'true'
```

## MITRE ATT&CK
- T1567.001
- T1572

## False Positives
- Legitimate use of Devtunnels will also trigger this.

## References
- https://blueteamops.medium.com/detecting-dev-tunnels-16f0994dc3e2
- https://learn.microsoft.com/en-us/azure/developer/dev-tunnels/security
- https://cydefops.com/devtunnels-unleashed

## Metadata
- **Author:** Kamran Saifullah
- **Date:** 2023-11-20
- **Rule ID:** `9501f8e6-8e3d-48fc-a8a6-1089dd5d7ef4`
- **Source file:** `windows/network_connection/net_connection_win_domain_devtunnels.yml`

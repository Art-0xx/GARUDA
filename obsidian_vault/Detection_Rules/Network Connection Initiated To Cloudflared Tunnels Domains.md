---
type: detection_rule
title: "Network Connection Initiated To Cloudflared Tunnels Domains"
rule_id: 7cd1dcdc-6edf-4896-86dc-d1f19ad64903
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567, attack.t1572]
---

# Network Connection Initiated To Cloudflared Tunnels Domains

## Description
Detects network connections to Cloudflared tunnels domains initiated by a process on the system.
Attackers can abuse that feature to establish a reverse shell or persistence on a machine.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|endswith:
  - .v2.argotunnel.com
  - protocol-v2.argotunnel.com
  - trycloudflare.com
  - update.argotunnel.com
  Initiated: 'true'
```

## MITRE ATT&CK
- T1567
- T1572

## False Positives
- Legitimate use of cloudflare tunnels will also trigger this.

## References
- https://defr0ggy.github.io/research/Abusing-Cloudflared-A-Proxy-Service-To-Host-Share-Applications/
- https://www.guidepointsecurity.com/blog/tunnel-vision-cloudflared-abused-in-the-wild/
- Internal Research

## Metadata
- **Author:** Kamran Saifullah, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2024-05-27
- **Rule ID:** `7cd1dcdc-6edf-4896-86dc-d1f19ad64903`
- **Source file:** `windows/network_connection/net_connection_win_domain_cloudflared_communication.yml`

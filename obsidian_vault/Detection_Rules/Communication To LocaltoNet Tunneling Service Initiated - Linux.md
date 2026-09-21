---
type: detection_rule
title: "Communication To LocaltoNet Tunneling Service Initiated - Linux"
rule_id: c4568f5d-131f-4e78-83d4-45b2da0ec4f1
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1572, attack.t1090, attack.t1102]
---

# Communication To LocaltoNet Tunneling Service Initiated - Linux

## Description
Detects an executable initiating a network connection to "LocaltoNet" tunneling sub-domains.
LocaltoNet is a reverse proxy that enables localhost services to be exposed to the Internet.
Attackers have been seen to use this service for command-and-control activities to bypass MFA and perimeter controls.

## Log Source
```yaml
category: network_connection
product: linux
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|endswith:
  - .localto.net
  - .localtonet.com
  Initiated: 'true'
```

## MITRE ATT&CK
- T1572
- T1090
- T1102

## False Positives
- Legitimate use of the LocaltoNet service.

## References
- https://localtonet.com/documents/supported-tunnels
- https://cloud.google.com/blog/topics/threat-intelligence/unc3944-targets-saas-applications

## Metadata
- **Author:** Andreas Braathen (mnemonic.io)
- **Date:** 2024-06-17
- **Rule ID:** `c4568f5d-131f-4e78-83d4-45b2da0ec4f1`
- **Source file:** `linux/network_connection/net_connection_lnx_domain_localtonet_tunnel.yml`

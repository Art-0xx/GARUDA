---
type: detection_rule
title: "Communication To LocaltoNet Tunneling Service Initiated"
rule_id: 3ab65069-d82a-4d44-a759-466661a082d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1572, attack.t1090, attack.t1102]
---

# Communication To LocaltoNet Tunneling Service Initiated

## Description
Detects an executable initiating a network connection to "LocaltoNet" tunneling sub-domains.
LocaltoNet is a reverse proxy that enables localhost services to be exposed to the Internet.
Attackers have been seen to use this service for command-and-control activities to bypass MFA and perimeter controls.

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
- **Rule ID:** `3ab65069-d82a-4d44-a759-466661a082d1`
- **Source file:** `windows/network_connection/net_connection_win_domain_localtonet_tunnel.yml`

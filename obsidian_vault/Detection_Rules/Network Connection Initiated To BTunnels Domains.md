---
type: detection_rule
title: "Network Connection Initiated To BTunnels Domains"
rule_id: 9e02c8ec-02b9-43e8-81eb-34a475ba7965
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567, attack.t1572]
---

# Network Connection Initiated To BTunnels Domains

## Description
Detects network connections to BTunnels domains initiated by a process on the system.
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
  DestinationHostname|endswith: .btunnel.co.in
  Initiated: 'true'
```

## MITRE ATT&CK
- T1567
- T1572

## False Positives
- Legitimate use of BTunnels will also trigger this.

## References
- https://defr0ggy.github.io/research/Utilizing-BTunnel-For-Data-Exfiltration/

## Metadata
- **Author:** Kamran Saifullah
- **Date:** 2024-09-13
- **Rule ID:** `9e02c8ec-02b9-43e8-81eb-34a475ba7965`
- **Source file:** `windows/network_connection/net_connection_win_domain_btunnels.yml`

---
type: detection_rule
title: "Communication To Ngrok Tunneling Service Initiated"
rule_id: 1d08ac94-400d-4469-a82f-daee9a908849
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567, attack.t1568.002, attack.t1572, attack.t1090, attack.t1102]
---

# Communication To Ngrok Tunneling Service Initiated

## Description
Detects an executable initiating a network connection to "ngrok" tunneling domains.
Attackers were seen using this "ngrok" in order to store their second stage payloads and malware.
While communication with such domains can be legitimate, often times is a sign of either data exfiltration by malicious actors or additional download.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|contains:
  - tunnel.us.ngrok.com
  - tunnel.eu.ngrok.com
  - tunnel.ap.ngrok.com
  - tunnel.au.ngrok.com
  - tunnel.sa.ngrok.com
  - tunnel.jp.ngrok.com
  - tunnel.in.ngrok.com
```

## MITRE ATT&CK
- T1567
- T1568.002
- T1572
- T1090
- T1102

## False Positives
- Legitimate use of the ngrok service.

## References
- https://twitter.com/hakluke/status/1587733971814977537/photo/1
- https://ngrok.com/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-11-03
- **Rule ID:** `1d08ac94-400d-4469-a82f-daee9a908849`
- **Source file:** `windows/network_connection/net_connection_win_domain_ngrok_tunnel.yml`

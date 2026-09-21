---
type: detection_rule
title: "Communication To Ngrok Tunneling Service - Linux"
rule_id: 19bf6fdb-7721-4f3d-867f-53467f6a5db6
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1567, attack.t1568.002, attack.t1572, attack.t1090, attack.t1102]
---

# Communication To Ngrok Tunneling Service - Linux

## Description
Detects an executable accessing an ngrok tunneling endpoint, which could be a sign of forbidden exfiltration of data exfiltration by malicious actors

## Log Source
```yaml
category: network_connection
product: linux
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
- Legitimate use of ngrok

## References
- https://twitter.com/hakluke/status/1587733971814977537/photo/1
- https://ngrok.com/docs/secure-tunnels/tunnels/ssh-reverse-tunnel-agent

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-11-03
- **Rule ID:** `19bf6fdb-7721-4f3d-867f-53467f6a5db6`
- **Source file:** `linux/network_connection/net_connection_lnx_ngrok_tunnel.yml`

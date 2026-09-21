---
type: detection_rule
title: "Cloudflared Tunnels Related DNS Requests"
rule_id: a1d9eec5-33b2-4177-8d24-27fe754d0812
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001, attack.t1572]
---

# Cloudflared Tunnels Related DNS Requests

## Description
Detects DNS requests to Cloudflared tunnels domains.
Attackers can abuse that feature to establish a reverse shell or persistence on a machine.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  QueryName|endswith:
  - .v2.argotunnel.com
  - protocol-v2.argotunnel.com
  - trycloudflare.com
  - update.argotunnel.com
```

## MITRE ATT&CK
- T1071.001
- T1572

## False Positives
- Legitimate use of cloudflare tunnels will also trigger this.

## References
- https://www.guidepointsecurity.com/blog/tunnel-vision-cloudflared-abused-in-the-wild/
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-12-20
- **Rule ID:** `a1d9eec5-33b2-4177-8d24-27fe754d0812`
- **Source file:** `windows/dns_query/dns_query_win_cloudflared_communication.yml`

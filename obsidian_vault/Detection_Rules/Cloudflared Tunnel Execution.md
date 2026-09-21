---
type: detection_rule
title: "Cloudflared Tunnel Execution"
rule_id: 9a019ffc-3580-4c9d-8d87-079f7e8d3fd4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1102, attack.t1090, attack.t1572]
---

# Cloudflared Tunnel Execution

## Description
Detects execution of the "cloudflared" tool to connect back to a tunnel. This was seen used by threat actors to maintain persistence and remote access to compromised networks.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - '-config '
  - '-credentials-contents '
  - '-credentials-file '
  - '-token '
  CommandLine|contains|all:
  - ' tunnel '
  - ' run '
```

## MITRE ATT&CK
- T1102
- T1090
- T1572

## False Positives
- Legitimate usage of Cloudflared tunnel.

## References
- https://blog.reconinfosec.com/emergence-of-akira-ransomware-group
- https://github.com/cloudflare/cloudflared
- https://developers.cloudflare.com/cloudflare-one/connections/connect-apps

## Metadata
- **Author:** Janantha Marasinghe, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-17
- **Rule ID:** `9a019ffc-3580-4c9d-8d87-079f7e8d3fd4`
- **Source file:** `windows/process_creation/proc_creation_win_cloudflared_tunnel_run.yml`

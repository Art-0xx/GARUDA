---
type: detection_rule
title: "Process Initiated Network Connection To Ngrok Domain"
rule_id: 18249279-932f-45e2-b37a-8925f2597670
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567, attack.t1572, attack.t1102]
---

# Process Initiated Network Connection To Ngrok Domain

## Description
Detects an executable initiating a network connection to "ngrok" domains.
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
  DestinationHostname|endswith:
  - .ngrok-free.app
  - .ngrok-free.dev
  - .ngrok.app
  - .ngrok.dev
  - .ngrok.io
  Initiated: 'true'
```

## MITRE ATT&CK
- T1567
- T1572
- T1102

## False Positives
- Legitimate use of the ngrok service.

## References
- https://ngrok.com/
- https://ngrok.com/blog-post/new-ngrok-domains
- https://www.virustotal.com/gui/file/cca0c1182ac114b44dc52dd2058fcd38611c20bb6b5ad84710681d38212f835a/
- https://www.rnbo.gov.ua/files/2023_YEAR/CYBERCENTER/november/APT29%20attacks%20Embassies%20using%20CVE-2023-38831%20-%20report%20en.pdf

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-07-16
- **Rule ID:** `18249279-932f-45e2-b37a-8925f2597670`
- **Source file:** `windows/network_connection/net_connection_win_domain_ngrok.yml`

---
type: detection_rule
title: "DNS Query To Visual Studio Code Tunnels Domain"
rule_id: b3e6418f-7c7a-4fad-993a-93b65027a9f1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001]
---

# DNS Query To Visual Studio Code Tunnels Domain

## Description
Detects DNS query requests to Visual Studio Code tunnel domains. Attackers can abuse that feature to establish a reverse shell or persistence on a machine.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  QueryName|endswith: .tunnels.api.visualstudio.com
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Legitimate use of Visual Studio Code tunnel will also trigger this.

## References
- https://ipfyx.fr/post/visual-studio-code-tunnel/
- https://badoption.eu/blog/2023/01/31/code_c2.html
- https://cydefops.com/vscode-data-exfiltration

## Metadata
- **Author:** citron_ninja
- **Date:** 2023-10-25
- **Rule ID:** `b3e6418f-7c7a-4fad-993a-93b65027a9f1`
- **Source file:** `windows/dns_query/dns_query_win_vscode_tunnel_communication.yml`

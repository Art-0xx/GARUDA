---
type: detection_rule
title: "Network Connection Initiated To Visual Studio Code Tunnels Domain"
rule_id: 4b657234-038e-4ad5-997c-4be42340bce4
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567, attack.t1572]
---

# Network Connection Initiated To Visual Studio Code Tunnels Domain

## Description
Detects network connections to Visual Studio Code tunnel domains initiated by a process on a system. Attackers can abuse that feature to establish a reverse shell or persistence on a machine.

## Log Source
```yaml
category: network_connection
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  DestinationHostname|endswith: .tunnels.api.visualstudio.com
  Initiated: 'true'
```

## MITRE ATT&CK
- T1567
- T1572

## False Positives
- Legitimate use of Visual Studio Code tunnel will also trigger this.

## References
- https://ipfyx.fr/post/visual-studio-code-tunnel/
- https://badoption.eu/blog/2023/01/31/code_c2.html
- https://cydefops.com/vscode-data-exfiltration

## Metadata
- **Author:** Kamran Saifullah
- **Date:** 2023-11-20
- **Rule ID:** `4b657234-038e-4ad5-997c-4be42340bce4`
- **Source file:** `windows/network_connection/net_connection_win_domain_vscode_tunnel_connection.yml`

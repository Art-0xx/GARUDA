---
type: detection_rule
title: "Suspicious Plink Port Forwarding"
rule_id: 48a61b29-389f-4032-b317-b30de6b95314
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1572, attack.t1021.001]
---

# Suspicious Plink Port Forwarding

## Description
Detects suspicious Plink tunnel port forwarding to a local port

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' -R '
  Description: Command-line SSH, Telnet, and Rlogin client
```

## MITRE ATT&CK
- T1572
- T1021.001

## False Positives
- Administrative activity using a remote port forwarding to a local port

## References
- https://www.real-sec.com/2019/04/bypassing-network-restrictions-through-rdp-tunneling/
- https://medium.com/@informationsecurity/remote-ssh-tunneling-with-plink-exe-7831072b3d7d

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-01-19
- **Rule ID:** `48a61b29-389f-4032-b317-b30de6b95314`
- **Source file:** `windows/process_creation/proc_creation_win_plink_port_forwarding.yml`

---
type: detection_rule
title: "RDP Port Forwarding Rule Added Via Netsh.EXE"
rule_id: 782d6f3e-4c5d-4b8c-92a3-1d05fed72e63
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1090]
---

# RDP Port Forwarding Rule Added Via Netsh.EXE

## Description
Detects the execution of netsh to configure a port forwarding of port 3389 (RDP) rule

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - ' i'
  - ' p'
  - =3389
  - ' c'
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1090

## False Positives
- Legitimate administration activity

## References
- https://www.fireeye.com/blog/threat-research/2019/01/bypassing-network-restrictions-through-rdp-tunneling.html

## Metadata
- **Author:** Florian Roth (Nextron Systems), oscd.community
- **Date:** 2019-01-29
- **Rule ID:** `782d6f3e-4c5d-4b8c-92a3-1d05fed72e63`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_port_forwarding_3389.yml`

---
type: detection_rule
title: "New Port Forwarding Rule Added Via Netsh.EXE"
rule_id: 322ed9ec-fcab-4f67-9a34-e7c6aef43614
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1090]
---

# New Port Forwarding Rule Added Via Netsh.EXE

## Description
Detects the execution of netsh commands that configure a new port forwarding (PortProxy) rule

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_img and 1 of selection_cli_*
selection_cli_1:
  CommandLine|contains|all:
  - interface
  - portproxy
  - add
  - v4tov4
selection_cli_2:
  CommandLine|contains|all:
  - 'i '
  - 'p '
  - 'a '
  - 'v '
selection_cli_3:
  CommandLine|contains|all:
  - connectp
  - listena
  - c=
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1090

## False Positives
- Legitimate administration activity
- WSL2 network bridge PowerShell script used for WSL/Kubernetes/Docker (e.g. https://github.com/microsoft/WSL/issues/4150#issuecomment-504209723)

## References
- https://www.fireeye.com/blog/threat-research/2019/01/bypassing-network-restrictions-through-rdp-tunneling.html
- https://adepts.of0x.cc/netsh-portproxy-code/
- https://www.dfirnotes.net/portproxy_detection/

## Metadata
- **Author:** Florian Roth (Nextron Systems), omkar72, oscd.community, Swachchhanda Shrawan Poudel
- **Date:** 2019-01-29
- **Rule ID:** `322ed9ec-fcab-4f67-9a34-e7c6aef43614`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_port_forwarding.yml`

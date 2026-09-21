---
type: detection_rule
title: "RDP Connection Allowed Via Netsh.EXE"
rule_id: 01aeb693-138d-49d2-9403-c4f52d7d3d62
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1686.003]
---

# RDP Connection Allowed Via Netsh.EXE

## Description
Detects usage of the netsh command to open and allow connections to port 3389 (RDP). As seen used by Sarwent Malware

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - portopening
  - allow
  CommandLine|contains|all:
  - 'firewall '
  - 'add '
  - 'tcp '
  - '3389'
selection_img:
- Image|endswith: \netsh.exe
- OriginalFileName: netsh.exe
```

## MITRE ATT&CK
- T1686.003

## False Positives
- Legitimate administration activity

## References
- https://labs.sentinelone.com/sarwent-malware-updates-command-detonation/

## Metadata
- **Author:** Sander Wiebing
- **Date:** 2020-05-23
- **Rule ID:** `01aeb693-138d-49d2-9403-c4f52d7d3d62`
- **Source file:** `windows/process_creation/proc_creation_win_netsh_fw_allow_rdp.yml`

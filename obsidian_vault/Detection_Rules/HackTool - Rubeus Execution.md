---
type: detection_rule
title: "HackTool - Rubeus Execution"
rule_id: 7ec2c172-dceb-4c10-92c9-87c1881b7e18
platform: windows
level: critical
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1558.003, attack.t1550.003]
---

# HackTool - Rubeus Execution

## Description
Detects the execution of the hacktool Rubeus via PE information of command line parameters

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \Rubeus.exe
- OriginalFileName: Rubeus.exe
- Description: Rubeus
- CommandLine|contains:
  - 'asreproast '
  - 'dump /service:krbtgt '
  - dump /luid:0x
  - 'kerberoast '
  - 'createnetonly /program:'
  - 'ptt /ticket:'
  - '/impersonateuser:'
  - 'renew /ticket:'
  - 'asktgt /user:'
  - 'harvest /interval:'
  - 's4u /user:'
  - 's4u /ticket:'
  - 'hash /password:'
  - 'golden /aes256:'
  - 'silver /user:'
```

## MITRE ATT&CK
- T1003
- T1558.003
- T1550.003

## False Positives
- Unlikely

## References
- https://blog.harmj0y.net/redteaming/from-kekeo-to-rubeus
- https://m0chan.github.io/2019/07/31/How-To-Attack-Kerberos-101.html
- https://github.com/GhostPack/Rubeus

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-12-19
- **Rule ID:** `7ec2c172-dceb-4c10-92c9-87c1881b7e18`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_rubeus.yml`

---
type: detection_rule
title: "HackTool - Rubeus Execution - ScriptBlock"
rule_id: 3245cd30-e015-40ff-a31d-5cadd5f377ec
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1558.003, attack.t1550.003]
---

# HackTool - Rubeus Execution - ScriptBlock

## Description
Detects the execution of the hacktool Rubeus using specific command line flags

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
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
- **Author:** Christian Burkard (Nextron Systems), Florian Roth (Nextron Systems)
- **Date:** 2023-04-27
- **Rule ID:** `3245cd30-e015-40ff-a31d-5cadd5f377ec`
- **Source file:** `windows/powershell/powershell_script/posh_ps_hktl_rubeus.yml`

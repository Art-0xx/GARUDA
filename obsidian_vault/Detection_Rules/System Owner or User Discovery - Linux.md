---
type: detection_rule
title: "System Owner or User Discovery - Linux"
rule_id: 9a0d8ca0-2385-4020-b6c6-cb6153ca56f3
platform: linux
level: low
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1033]
---

# System Owner or User Discovery - Linux

## Description
Detects the execution of host or user discovery utilities such as "whoami", "hostname", "id", etc.
Adversaries may use the information from System Owner/User Discovery during automated discovery to shape follow-on behaviors, including whether or not the adversary fully infects the target and/or attempts specific actions.

## Log Source
```yaml
product: linux
service: auditd
```

## Detection Logic
```yaml
condition: selection
selection:
  a0:
  - hostname
  - id
  - last
  - uname
  - users
  - w
  - who
  - whoami
  type: EXECVE
```

## MITRE ATT&CK
- T1033

## False Positives
- Admin activity

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1033/T1033.md

## Metadata
- **Author:** Timur Zinniatullin, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `9a0d8ca0-2385-4020-b6c6-cb6153ca56f3`
- **Source file:** `linux/auditd/execve/lnx_auditd_user_discovery.yml`

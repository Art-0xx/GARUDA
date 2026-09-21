---
type: detection_rule
title: "Persistence Via Sticky Key Backdoor"
rule_id: 1070db9a-3e5d-412e-8e7b-7183b616e1b3
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.008]
---

# Persistence Via Sticky Key Backdoor

## Description
By replacing the sticky keys executable with the local admins CMD executable, an attacker is able to access a privileged windows console session without authenticating to the system.
When the sticky keys are "activated" the privilleged shell is launched.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - 'copy '
  - '/y '
  - C:\windows\system32\cmd.exe C:\windows\system32\sethc.exe
```

## MITRE ATT&CK
- T1546.008

## False Positives
- Unlikely

## References
- https://www.fireeye.com/blog/threat-research/2017/03/apt29_domain_frontin.html
- https://www.clearskysec.com/wp-content/uploads/2020/02/ClearSky-Fox-Kitten-Campaign-v1.pdf
- https://learn.microsoft.com/en-us/archive/blogs/jonathantrull/detecting-sticky-key-backdoors

## Metadata
- **Author:** Sreeman
- **Date:** 2020-02-18
- **Rule ID:** `1070db9a-3e5d-412e-8e7b-7183b616e1b3`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_sticky_keys_replace.yml`

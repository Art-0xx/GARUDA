---
type: detection_rule
title: "Suspicious TSCON Start as SYSTEM"
rule_id: 9847f263-4a81-424f-970c-875dab15b79b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Suspicious TSCON Start as SYSTEM

## Description
Detects a tscon.exe start as LOCAL SYSTEM

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \tscon.exe
  User|contains:
  - AUTHORI
  - AUTORI
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Unknown

## References
- http://www.korznikov.com/2017/03/0-day-or-feature-privilege-escalation.html
- https://medium.com/@networksecurity/rdp-hijacking-how-to-hijack-rds-and-remoteapp-sessions-transparently-to-move-through-an-da2a1e73a5f6
- https://www.ired.team/offensive-security/lateral-movement/t1076-rdp-hijacking-for-lateral-movement

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-03-17
- **Rule ID:** `9847f263-4a81-424f-970c-875dab15b79b`
- **Source file:** `windows/process_creation/proc_creation_win_tscon_localsystem.yml`

---
type: detection_rule
title: "Suspicious RDP Redirect Using TSCON"
rule_id: f72aa3e8-49f9-4c7d-bd74-f8ab84ff9bbb
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1563.002, attack.t1021.001]
---

# Suspicious RDP Redirect Using TSCON

## Description
Detects a suspicious RDP session redirect using tscon.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' /dest:rdp-tcp#'
```

## MITRE ATT&CK
- T1563.002
- T1021.001

## False Positives
- Unknown

## References
- http://www.korznikov.com/2017/03/0-day-or-feature-privilege-escalation.html
- https://medium.com/@networksecurity/rdp-hijacking-how-to-hijack-rds-and-remoteapp-sessions-transparently-to-move-through-an-da2a1e73a5f6
- https://www.hackingarticles.in/rdp-session-hijacking-with-tscon/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-03-17
- **Rule ID:** `f72aa3e8-49f9-4c7d-bd74-f8ab84ff9bbb`
- **Source file:** `windows/process_creation/proc_creation_win_tscon_rdp_redirect.yml`

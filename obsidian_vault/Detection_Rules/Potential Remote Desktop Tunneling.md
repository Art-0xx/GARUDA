---
type: detection_rule
title: "Potential Remote Desktop Tunneling"
rule_id: 8a3038e8-9c9d-46f8-b184-66234a160f6f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021]
---

# Potential Remote Desktop Tunneling

## Description
Detects potential use of an SSH utility to establish RDP over a reverse SSH Tunnel. This can be used by attackers to enable routing of network packets that would otherwise not reach their intended destination.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  CommandLine|contains: :3389
selection_opt:
  CommandLine|contains:
  - ' -L '
  - ' -P '
  - ' -R '
  - ' -pw '
  - ' -ssh '
```

## MITRE ATT&CK
- T1021

## False Positives
- Unknown

## References
- https://www.elastic.co/guide/en/security/current/potential-remote-desktop-tunneling-detected.html

## Metadata
- **Author:** Tim Rauch, Elastic (idea)
- **Date:** 2022-09-27
- **Rule ID:** `8a3038e8-9c9d-46f8-b184-66234a160f6f`
- **Source file:** `windows/process_creation/proc_creation_win_susp_remote_desktop_tunneling.yml`

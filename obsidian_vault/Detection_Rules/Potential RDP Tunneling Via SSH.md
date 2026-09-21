---
type: detection_rule
title: "Potential RDP Tunneling Via SSH"
rule_id: f7d7ebd5-a016-46e2-9c54-f9932f2d386d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1572]
---

# Potential RDP Tunneling Via SSH

## Description
Execution of ssh.exe to perform data exfiltration and tunneling through RDP

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: :3389
  Image|endswith: \ssh.exe
```

## MITRE ATT&CK
- T1572

## False Positives
- Unknown

## References
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-12
- **Rule ID:** `f7d7ebd5-a016-46e2-9c54-f9932f2d386d`
- **Source file:** `windows/process_creation/proc_creation_win_ssh_rdp_tunneling.yml`

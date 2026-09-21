---
type: detection_rule
title: "Port Forwarding Activity Via SSH.EXE"
rule_id: 327f48c1-a6db-4eb8-875a-f6981f1b0183
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1572, attack.t1021.001, attack.t1021.004]
---

# Port Forwarding Activity Via SSH.EXE

## Description
Detects port forwarding activity via SSH.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|windash: ' -R '
  Image|endswith: \ssh.exe
```

## MITRE ATT&CK
- T1572
- T1021.001
- T1021.004

## False Positives
- Administrative activity using a remote port forwarding to a local port

## References
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-12
- **Rule ID:** `327f48c1-a6db-4eb8-875a-f6981f1b0183`
- **Source file:** `windows/process_creation/proc_creation_win_ssh_port_forward.yml`

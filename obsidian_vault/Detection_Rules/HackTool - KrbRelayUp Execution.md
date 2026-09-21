---
type: detection_rule
title: "HackTool - KrbRelayUp Execution"
rule_id: 12827a56-61a4-476a-a9cb-f3068f191073
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1558.003, attack.t1550.003]
---

# HackTool - KrbRelayUp Execution

## Description
Detects KrbRelayUp used to perform a universal no-fix local privilege escalation in Windows domain environments where LDAP signing is not enforced

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_cli_1:
  CommandLine|contains|all:
  - ' relay '
  - ' -Domain '
  - ' -ComputerName '
selection_cli_2:
  CommandLine|contains|all:
  - ' krbscm '
  - ' -sc '
selection_cli_3:
  CommandLine|contains|all:
  - ' spawn '
  - ' -d '
  - ' -cn '
  - ' -cp '
selection_img:
- Image|endswith: \KrbRelayUp.exe
- OriginalFileName: KrbRelayUp.exe
```

## MITRE ATT&CK
- T1558.003
- T1550.003

## False Positives
- Unlikely

## References
- https://github.com/Dec0ne/KrbRelayUp

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-04-26
- **Rule ID:** `12827a56-61a4-476a-a9cb-f3068f191073`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_krbrelayup.yml`

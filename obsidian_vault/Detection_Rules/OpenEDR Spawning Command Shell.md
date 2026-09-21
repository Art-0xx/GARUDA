---
type: detection_rule
title: "OpenEDR Spawning Command Shell"
rule_id: 7f3a9c2d-4e8b-4a7f-9d3e-5c6f8a9b2e1d
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.003, attack.t1021.004, attack.t1219]
---

# OpenEDR Spawning Command Shell

## Description
Detects the OpenEDR ssh-shellhost.exe spawning a command shell (cmd.exe) or PowerShell with PTY (pseudo-terminal) capabilities.
This may indicate remote command execution through OpenEDR's remote management features, which could be legitimate administrative activity or potential abuse of the remote access tool.
Threat actors may leverage OpenEDR's remote shell capabilities to execute commands on compromised systems, facilitating lateral movement or other command-and-control operations.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_shell:
  CommandLine|contains:
  - bash
  - cmd
  - powershell
  - pwsh
selection_img:
  CommandLine|contains: --pty
  Image|endswith: \ssh-shellhost.exe
  ParentImage|endswith: \ITSMService.exe
```

## MITRE ATT&CK
- T1059.003
- T1021.004
- T1219

## False Positives
- Legitimate use of OpenEDR for remote command execution

## References
- https://kostas-ts.medium.com/detecting-abuse-of-openedrs-permissive-edr-trial-a-security-researcher-s-perspective-fc55bf53972c

## Metadata
- **Author:** @kostastsale
- **Date:** 2026-02-19
- **Rule ID:** `7f3a9c2d-4e8b-4a7f-9d3e-5c6f8a9b2e1d`
- **Source file:** `windows/process_creation/proc_creation_win_comodo_ssh_shellhost_cmd_spawn.yml`

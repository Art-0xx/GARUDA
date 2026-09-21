---
type: detection_rule
title: "Remote Access Tool - MeshAgent Command Execution via MeshCentral"
rule_id: 74a2b202-73e0-4693-9a3a-9d36146d0775
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - MeshAgent Command Execution via MeshCentral

## Description
Detects the use of MeshAgent to execute commands on the target host, particularly when threat actors might abuse it to execute commands directly.
MeshAgent can execute commands on the target host by leveraging win-console to obscure their activities and win-dispatcher to run malicious code through IPC with child processes.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  ParentImage|endswith: \meshagent.exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- False positives can be found in environments using MeshAgent for remote management, analysis should prioritize the grandparent process, MeshAgent.exe, and scrutinize the resulting child processes triggered by any suspicious interactive commands directed at the target host.

## References
- https://github.com/Ylianst/MeshAgent
- https://github.com/Ylianst/MeshAgent/blob/52cf129ca43d64743181fbaf940e0b4ddb542a37/modules/win-dispatcher.js#L173
- https://github.com/Ylianst/MeshAgent/blob/52cf129ca43d64743181fbaf940e0b4ddb542a37/modules/win-info.js#L55

## Metadata
- **Author:** @Kostastsale
- **Date:** 2024-09-22
- **Rule ID:** `74a2b202-73e0-4693-9a3a-9d36146d0775`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_meshagent_exec.yml`

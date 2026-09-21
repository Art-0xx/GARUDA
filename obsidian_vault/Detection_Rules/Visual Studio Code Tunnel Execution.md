---
type: detection_rule
title: "Visual Studio Code Tunnel Execution"
rule_id: 90d6bd71-dffb-4989-8d86-a827fedd6624
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001, attack.t1219]
---

# Visual Studio Code Tunnel Execution

## Description
Detects Visual Studio Code tunnel execution. Attackers can abuse this functionality to establish a C2 channel

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_only_tunnel:
  CommandLine|endswith: .exe tunnel
  OriginalFileName: null
selection_parent_tunnel:
  CommandLine|contains|all:
  - '/d /c '
  - \servers\Stable-
  - code-server.cmd
  Image|endswith: \cmd.exe
  ParentCommandLine|endswith: ' tunnel'
selection_tunnel_args:
  CommandLine|contains|all:
  - .exe tunnel
  - --accept-server-license-terms
```

## MITRE ATT&CK
- T1071.001
- T1219

## False Positives
- Legitimate use of Visual Studio Code tunnel

## References
- https://ipfyx.fr/post/visual-studio-code-tunnel/
- https://badoption.eu/blog/2023/01/31/code_c2.html
- https://code.visualstudio.com/docs/remote/tunnels

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), citron_ninja
- **Date:** 2023-10-25
- **Rule ID:** `90d6bd71-dffb-4989-8d86-a827fedd6624`
- **Source file:** `windows/process_creation/proc_creation_win_vscode_tunnel_execution.yml`

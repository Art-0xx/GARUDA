---
type: detection_rule
title: "Visual Studio Code Tunnel Shell Execution"
rule_id: f4a623c2-4ef5-4c33-b811-0642f702c9f1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001]
---

# Visual Studio Code Tunnel Shell Execution

## Description
Detects the execution of a shell (powershell, bash, wsl...) via Visual Studio Code tunnel. Attackers can abuse this functionality to establish a C2 channel and execute arbitrary commands on the system.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_child_*
selection_child_1:
  CommandLine|contains: \terminal\browser\media\shellIntegration.ps1
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_child_2:
  Image|endswith:
  - \wsl.exe
  - \bash.exe
selection_parent:
  ParentCommandLine|contains: .vscode-server
  ParentImage|contains: \servers\Stable-
  ParentImage|endswith: \server\node.exe
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Legitimate use of Visual Studio Code tunnel and running code from there

## References
- https://ipfyx.fr/post/visual-studio-code-tunnel/
- https://badoption.eu/blog/2023/01/31/code_c2.html
- https://code.visualstudio.com/docs/remote/tunnels

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-10-25
- **Rule ID:** `f4a623c2-4ef5-4c33-b811-0642f702c9f1`
- **Source file:** `windows/process_creation/proc_creation_win_vscode_tunnel_remote_shell_.yml`

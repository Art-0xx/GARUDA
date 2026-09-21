---
type: detection_rule
title: "Renamed Visual Studio Code Tunnel Execution"
rule_id: 2cf29f11-e356-4f61-98c0-1bdb9393d6da
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.001, attack.t1219]
---

# Renamed Visual Studio Code Tunnel Execution

## Description
Detects renamed Visual Studio Code tunnel execution. Attackers can abuse this functionality to establish a C2 channel

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (1 of selection_image_* and not 1 of filter_main_image_*) or (selection_parent_tunnel
  and not 1 of filter_main_parent_*)
filter_main_image_code:
  Image|endswith:
  - \code-tunnel.exe
  - \code.exe
filter_main_parent_code:
  ParentImage|endswith:
  - \code-tunnel.exe
  - \code.exe
selection_image_only_tunnel:
  CommandLine|endswith: .exe tunnel
  OriginalFileName: null
selection_image_tunnel_args:
  CommandLine|contains|all:
  - .exe tunnel
  - --accept-server-license-terms
selection_image_tunnel_service:
  CommandLine|contains|all:
  - 'tunnel '
  - service
  - internal-run
  - tunnel-service.log
selection_parent_tunnel:
  CommandLine|contains|all:
  - '/d /c '
  - \servers\Stable-
  - code-server.cmd
  Image|endswith: \cmd.exe
  ParentCommandLine|endswith: ' tunnel'
```

## MITRE ATT&CK
- T1071.001
- T1219

## False Positives
- Unknown

## References
- https://ipfyx.fr/post/visual-studio-code-tunnel/
- https://badoption.eu/blog/2023/01/31/code_c2.html
- https://code.visualstudio.com/docs/remote/tunnels

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-28
- **Rule ID:** `2cf29f11-e356-4f61-98c0-1bdb9393d6da`
- **Source file:** `windows/process_creation/proc_creation_win_vscode_tunnel_renamed_execution.yml`

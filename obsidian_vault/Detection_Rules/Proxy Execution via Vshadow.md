---
type: detection_rule
title: "Proxy Execution via Vshadow"
rule_id: d7c75059-2901-4578-b209-8837fd31c6a8
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Proxy Execution via Vshadow

## Description
Detects the invocation of vshadow.exe with the -exec parameter that executes a specified script or command after the shadow copies are created but before the VShadow tool exits.
VShadow is a command-line tool that you can use to create and manage volume shadow copies. While legitimate backup or administrative scripts may use this flag,
attackers can leverage this parameter to proxy the execution of malware.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: -exec
selection_img:
- Image|endswith: \vshadow.exe
- OriginalFileName: vshadow.exe
```

## MITRE ATT&CK
- T1202

## False Positives
- System backup or administrator tools
- Legitimate administrative scripts

## References
- https://lolbas-project.github.io/lolbas/OtherMSBinaries/Vshadow/
- https://learn.microsoft.com/en-us/windows/win32/vss/vshadow-tool-and-sample

## Metadata
- **Author:** David Faiss
- **Date:** 2025-05-26
- **Rule ID:** `d7c75059-2901-4578-b209-8837fd31c6a8`
- **Source file:** `windows/process_creation/proc_creation_win_vshadow_exec.yml`

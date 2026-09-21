---
type: detection_rule
title: "Potentially Suspicious Child Process Of VsCode"
rule_id: 5a3164f2-b373-4152-93cf-090b13c12d27
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1202]
---

# Potentially Suspicious Child Process Of VsCode

## Description
Detects uncommon or suspicious child processes spawning from a VsCode "code.exe" process. This could indicate an attempt of persistence via VsCode tasks or terminal profiles.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_children_*
selection_children_cli:
  CommandLine|contains:
  - Invoke-Expressions
  - IEX
  - Invoke-Command
  - ICM
  - DownloadString
  - rundll32
  - regsvr32
  - wscript
  - cscript
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \cmd.exe
selection_children_images:
  Image|endswith:
  - \calc.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \cscript.exe
  - \wscript.exe
selection_children_paths:
  Image|contains:
  - :\Users\Public\
  - :\Windows\Temp\
  - :\Temp\
selection_parent:
  ParentImage|endswith: \code.exe
```

## MITRE ATT&CK
- T1218
- T1202

## False Positives
- In development environment where VsCode is used heavily. False positives may occur when developers use task to compile or execute different types of code. Remove or add processes accordingly

## References
- https://twitter.com/nas_bench/status/1618021838407495681
- https://twitter.com/nas_bench/status/1618021415852335105

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-26
- **Rule ID:** `5a3164f2-b373-4152-93cf-090b13c12d27`
- **Source file:** `windows/process_creation/proc_creation_win_vscode_child_processes_anomalies.yml`

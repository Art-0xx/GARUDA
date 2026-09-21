---
type: detection_rule
title: "Suspicious Use of CSharp Interactive Console"
rule_id: a9e416a8-e613-4f8b-88b8-a7d1d1af2f61
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1127]
---

# Suspicious Use of CSharp Interactive Console

## Description
Detects the execution of CSharp interactive console by PowerShell

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \csi.exe
  OriginalFileName: csi.exe
  ParentImage|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \powershell_ise.exe
```

## MITRE ATT&CK
- T1127

## False Positives
- Possible depending on environment. Pair with other factors such as net connections, command-line args, etc.

## References
- https://redcanary.com/blog/detecting-attacks-leveraging-the-net-framework/

## Metadata
- **Author:** Michael R. (@nahamike01)
- **Date:** 2020-03-08
- **Rule ID:** `a9e416a8-e613-4f8b-88b8-a7d1d1af2f61`
- **Source file:** `windows/process_creation/proc_creation_win_csi_use_of_csharp_console.yml`

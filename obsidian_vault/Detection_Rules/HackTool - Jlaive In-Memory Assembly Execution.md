---
type: detection_rule
title: "HackTool - Jlaive In-Memory Assembly Execution"
rule_id: 0a99eb3e-1617-41bd-b095-13dc767f3def
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.003]
---

# HackTool - Jlaive In-Memory Assembly Execution

## Description
Detects the use of Jlaive to execute assemblies in a copied PowerShell

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: parent_selection and (1 of selection*)
parent_selection:
  ParentCommandLine|endswith: .bat
  ParentImage|endswith: \cmd.exe
selection1:
  CommandLine|contains|all:
  - powershell.exe
  - .bat.exe
  Image|endswith: \xcopy.exe
selection2:
  CommandLine|contains|all:
  - pwsh.exe
  - .bat.exe
  Image|endswith: \xcopy.exe
selection3:
  CommandLine|contains|all:
  - +s
  - +h
  - .bat.exe
  Image|endswith: \attrib.exe
```

## MITRE ATT&CK
- T1059.003

## False Positives
- Unknown

## References
- https://jstnk9.github.io/jstnk9/research/Jlaive-Antivirus-Evasion-Tool
- https://web.archive.org/web/20220514073704/https://github.com/ch2sh/Jlaive

## Metadata
- **Author:** Jose Luis Sanchez Martinez (@Joseliyo_Jstnk)
- **Date:** 2022-05-24
- **Rule ID:** `0a99eb3e-1617-41bd-b095-13dc767f3def`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_jlaive_batch_execution.yml`

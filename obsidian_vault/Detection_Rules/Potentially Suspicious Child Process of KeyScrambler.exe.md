---
type: detection_rule
title: "Potentially Suspicious Child Process of KeyScrambler.exe"
rule_id: ca5583e9-8f80-46ac-ab91-7f314d13b984
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1203, attack.t1574.001]
---

# Potentially Suspicious Child Process of KeyScrambler.exe

## Description
Detects potentially suspicious child processes of KeyScrambler.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_binaries:
- Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- OriginalFileName:
  - Cmd.Exe
  - cscript.exe
  - mshta.exe
  - PowerShell.EXE
  - pwsh.dll
  - regsvr32.exe
  - RUNDLL32.EXE
  - wscript.exe
selection_parent:
  ParentImage|endswith: \KeyScrambler.exe
```

## MITRE ATT&CK
- T1203
- T1574.001

## False Positives
- Unknown

## References
- https://twitter.com/DTCERT/status/1712785421845790799

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-05-13
- **Rule ID:** `ca5583e9-8f80-46ac-ab91-7f314d13b984`
- **Source file:** `windows/process_creation/proc_creation_win_keyscrambler_susp_child_process.yml`

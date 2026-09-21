---
type: detection_rule
title: "Potentially Suspicious Child Processes Spawned by ConHost"
rule_id: dfa03a09-8b92-4d83-8e74-f72839b1c407
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202, attack.t1218]
---

# Potentially Suspicious Child Processes Spawned by ConHost

## Description
Detects suspicious child processes related to Windows Shell utilities spawned by `conhost.exe`, which could indicate malicious activity using trusted system components.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_child:
- Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \wscript.exe
- OriginalFileName:
  - cmd.exe
  - cscript.exe
  - mshta.exe
  - powershell_ise.exe
  - powershell.exe
  - pwsh.dll
  - regsvr32.exe
  - wscript.exe
selection_parent:
  ParentImage|endswith: \conhost.exe
```

## MITRE ATT&CK
- T1202
- T1218

## False Positives
- Legitimate administrative tasks using `conhost.exe` to spawn child processes such as `cmd.exe`, `powershell.exe`, or `regsvr32.exe`.

## References
- https://tria.ge/241015-l98snsyeje/behavioral2

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-02-05
- **Rule ID:** `dfa03a09-8b92-4d83-8e74-f72839b1c407`
- **Source file:** `windows/process_creation/proc_creation_win_conhost_susp_winshell_child_process.yml`

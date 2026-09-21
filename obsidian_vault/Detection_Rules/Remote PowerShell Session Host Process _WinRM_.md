---
type: detection_rule
title: "Remote PowerShell Session Host Process (WinRM)"
rule_id: 734f8d9b-42b8-41b2-bcf5-abaf49d5a3c8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1021.006]
---

# Remote PowerShell Session Host Process (WinRM)

## Description
Detects remote PowerShell sections by monitoring for wsmprovhost (WinRM host process) as a parent or child process (sign of an active PowerShell remote session).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \wsmprovhost.exe
- ParentImage|endswith: \wsmprovhost.exe
```

## MITRE ATT&CK
- T1059.001
- T1021.006

## False Positives
- Legitimate usage of remote Powershell, e.g. for monitoring purposes.

## References
- https://threathunterplaybook.com/hunts/windows/190511-RemotePwshExecution/notebook.html

## Metadata
- **Author:** Roberto Rodriguez @Cyb3rWard0g
- **Date:** 2019-09-12
- **Rule ID:** `734f8d9b-42b8-41b2-bcf5-abaf49d5a3c8`
- **Source file:** `windows/process_creation/proc_creation_win_winrm_remote_powershell_session_process.yml`

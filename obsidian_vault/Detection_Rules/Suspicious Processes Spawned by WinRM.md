---
type: detection_rule
title: "Suspicious Processes Spawned by WinRM"
rule_id: 5cc2cda8-f261-4d88-a2de-e9e193c86716
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1190]
---

# Suspicious Processes Spawned by WinRM

## Description
Detects suspicious processes including shells spawnd from WinRM host process

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \sh.exe
  - \bash.exe
  - \powershell.exe
  - \pwsh.exe
  - \wsl.exe
  - \schtasks.exe
  - \certutil.exe
  - \whoami.exe
  - \bitsadmin.exe
  ParentImage|endswith: \wsmprovhost.exe
```

## MITRE ATT&CK
- T1190

## False Positives
- Legitimate WinRM usage

## References
- Internal Research

## Metadata
- **Author:** Andreas Hunkeler (@Karneades), Markus Neis
- **Date:** 2021-05-20
- **Rule ID:** `5cc2cda8-f261-4d88-a2de-e9e193c86716`
- **Source file:** `windows/process_creation/proc_creation_win_winrm_susp_child_process.yml`

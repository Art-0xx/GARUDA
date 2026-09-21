---
type: detection_rule
title: "User Shell Folders Registry Modification via CommandLine"
rule_id: 8f3ab69a-aa22-4943-aa58-e0a52fdf6818
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001, attack.t1112]
---

# User Shell Folders Registry Modification via CommandLine

## Description
Detects modifications to User Shell Folders registry values via reg.exe or PowerShell, which could indicate persistence attempts.
Attackers may modify User Shell Folders registry values to point to malicious executables or scripts that will be executed during startup.
This technique is often used to maintain persistence on a compromised system by ensuring that malicious payloads are executed automatically.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_action:
  CommandLine|contains:
  - ' add '
  - New-ItemProperty
  - Set-ItemProperty
  - 'si '
selection_cli_paths_root:
  CommandLine|contains:
  - \Software\Microsoft\Windows\CurrentVersion\Explorer\Shell Folders
  - \Software\Microsoft\Windows\CurrentVersion\Explorer\User Shell Folders
selection_cli_paths_suffix:
  CommandLine|contains: Startup
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \reg.exe
- OriginalFileName:
  - powershell.exe
  - pwsh.dll
  - reg.exe
```

## MITRE ATT&CK
- T1547.001
- T1112

## False Positives
- Usage of reg.exe or PowerShell to modify User Shell Folders for legitimate purposes; but rare.

## References
- https://www.welivesecurity.com/en/eset-research/muddywater-snakes-riverbank/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-05
- **Rule ID:** `8f3ab69a-aa22-4943-aa58-e0a52fdf6818`
- **Source file:** `windows/process_creation/proc_creation_win_user_shell_folders_registry_modification.yml`

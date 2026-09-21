---
type: detection_rule
title: "File Explorer Folder Opened Using Explorer Folder Shortcut Via Shell"
rule_id: c3d76afc-93df-461e-8e67-9b2bad3f2ac4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1135]
---

# File Explorer Folder Opened Using Explorer Folder Shortcut Via Shell

## Description
Detects the initial execution of "cmd.exe" which spawns "explorer.exe" with the appropriate command line arguments for opening the "My Computer" folder.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: shell:mycomputerfolder
  Image|endswith: \explorer.exe
  ParentImage|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1135

## False Positives
- Unknown

## References
- https://ss64.com/nt/shell.html

## Metadata
- **Author:** @Kostastsale
- **Date:** 2022-12-22
- **Rule ID:** `c3d76afc-93df-461e-8e67-9b2bad3f2ac4`
- **Source file:** `windows/process_creation/proc_creation_win_explorer_folder_shortcut_via_shell_binary.yml`

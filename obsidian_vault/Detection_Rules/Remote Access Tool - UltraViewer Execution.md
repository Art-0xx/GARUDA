---
type: detection_rule
title: "Remote Access Tool - UltraViewer Execution"
rule_id: 88656cec-6c3b-487c-82c0-f73ebb805503
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - UltraViewer Execution

## Description
An adversary may use legitimate desktop support and remote access software, such as Team Viewer, Go2Assist, LogMein, AmmyyAdmin, etc, to establish an interactive command and control channel to target systems within networks.
These services are commonly used as legitimate technical support software, and may be allowed by application control within a target environment.
Remote access tools like VNC, Ammyy, and Teamviewer are used frequently when compared with other legitimate software commonly used by adversaries. (Citation: Symantec Living off the Land)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Product: UltraViewer
- Company: DucFabulous Co,ltd
- OriginalFileName: UltraViewer_Desktop.exe
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Legitimate use

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1219/T1219.md

## Metadata
- **Author:** frack113
- **Date:** 2022-09-25
- **Rule ID:** `88656cec-6c3b-487c-82c0-f73ebb805503`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_ultraviewer.yml`

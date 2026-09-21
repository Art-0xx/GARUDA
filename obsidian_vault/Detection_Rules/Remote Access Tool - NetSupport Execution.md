---
type: detection_rule
title: "Remote Access Tool - NetSupport Execution"
rule_id: 758ff488-18d5-4cbe-8ec4-02b6285a434f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Remote Access Tool - NetSupport Execution

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
- Description: NetSupport Client Configurator
- Product: NetSupport Remote Control
- Company: NetSupport Ltd
- OriginalFileName: PCICFGUI.EXE
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
- **Rule ID:** `758ff488-18d5-4cbe-8ec4-02b6285a434f`
- **Source file:** `windows/process_creation/proc_creation_win_remote_access_tools_netsupport.yml`

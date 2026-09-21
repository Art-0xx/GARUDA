---
type: detection_rule
title: "Hidden Powershell in Link File Pattern"
rule_id: 30e92f50-bb5a-4884-98b5-d20aa80f3d7a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Hidden Powershell in Link File Pattern

## Description
Detects events that appear when a user click on a link file with a powershell command in it

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - powershell
  - .lnk
  Image: C:\Windows\System32\cmd.exe
  ParentImage: C:\Windows\explorer.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Legitimate commands in .lnk files

## References
- https://www.x86matthew.com/view_post?id=embed_exe_lnk

## Metadata
- **Author:** frack113
- **Date:** 2022-02-06
- **Rule ID:** `30e92f50-bb5a-4884-98b5-d20aa80f3d7a`
- **Source file:** `windows/process_creation/proc_creation_win_susp_embed_exe_lnk.yml`

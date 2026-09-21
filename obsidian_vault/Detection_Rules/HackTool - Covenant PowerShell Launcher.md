---
type: detection_rule
title: "HackTool - Covenant PowerShell Launcher"
rule_id: c260b6db-48ba-4b4a-a76f-2f67644e99d2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1564.003]
---

# HackTool - Covenant PowerShell Launcher

## Description
Detects suspicious command lines used in Covenant luanchers

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_1:
  CommandLine|contains:
  - -Command
  - -EncodedCommand
  CommandLine|contains|all:
  - -Sta
  - -Nop
  - -Window
  - Hidden
selection_2:
  CommandLine|contains:
  - 'sv o (New-Object IO.MemorySteam);sv d '
  - mshta file.hta
  - GruntHTTP
  - -EncodedCommand cwB2ACAAbwAgA
```

## MITRE ATT&CK
- T1059.001
- T1564.003

## References
- https://posts.specterops.io/covenant-v0-5-eee0507b85ba

## Metadata
- **Author:** Florian Roth (Nextron Systems), Jonhnathan Ribeiro, oscd.community
- **Date:** 2020-06-04
- **Rule ID:** `c260b6db-48ba-4b4a-a76f-2f67644e99d2`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_covenant.yml`

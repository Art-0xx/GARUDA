---
type: detection_rule
title: "HackTool - HollowReaper Execution"
rule_id: 85d23b42-9a9d-4f8f-b3d7-d2733c1d58f5
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.012]
---

# HackTool - HollowReaper Execution

## Description
Detects usage of HollowReaper, a process hollowing shellcode launcher used for stealth payload execution through process hollowing.
It replaces the memory of a legitimate process with custom shellcode, allowing the attacker to execute payloads under the guise of trusted binaries.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \HollowReaper.exe
```

## MITRE ATT&CK
- T1055.012

## False Positives
- Unknown

## References
- https://github.com/vari-sh/RedTeamGrimoire/tree/b5e7635d34db6e1f0398d8847e8f293186e947c5/HollowReaper

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-07-01
- **Rule ID:** `85d23b42-9a9d-4f8f-b3d7-d2733c1d58f5`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_hollowreaper.yml`

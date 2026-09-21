---
type: detection_rule
title: "Suspicious Cross-User Process Spawn"
rule_id: d2b7a134-9c3e-4f8a-b56d-e0c1f8a29b47
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055, attack.t1134]
---

# Suspicious Cross-User Process Spawn

## Description
Detects suspicious spawning of a process under a different user context than the parent process.
Processes such as notepad.exe, calculator etc. are generally spawned under the same user context and
also they are often targeted as sacrificial process or decoy process to check successful privilege escalation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_same_user:
  User|fieldref: ParentUser
filter_optional_empty_user:
- ParentUser:
  - ''
  - '-'
- User:
  - ''
  - '-'
filter_optional_parent_null:
  ParentUser: null
filter_optional_user_null:
  User: null
selection:
  Image|endswith:
  - \notepad.exe
  - \calc.exe
  - \mspaint.exe
  - \wordpad.exe
  - \write.exe
```

## MITRE ATT&CK
- T1055
- T1134

## False Positives
- RunAs usage spawning one of the listed binaries under a different account

## References
- https://github.com/MSNightmare/LegacyHive
- https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-07-23
- **Rule ID:** `d2b7a134-9c3e-4f8a-b56d-e0c1f8a29b47`
- **Source file:** `windows/process_creation/proc_creation_win_susp_cross_user_process_spawn.yml`

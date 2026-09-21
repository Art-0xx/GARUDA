---
type: detection_rule
title: "Potential SysInternals ProcDump Evasion"
rule_id: 79b06761-465f-4f88-9ef2-150e24d3d737
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1003.001]
---

# Potential SysInternals ProcDump Evasion

## Description
Detects uses of the SysInternals ProcDump utility in which ProcDump or its output get renamed, or a dump file is moved or copied to a different name

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
  - copy procdump
  - move procdump
selection_2:
  CommandLine|contains:
  - 2.dmp
  - lsass
  - out.dmp
  CommandLine|contains|all:
  - 'copy '
  - '.dmp '
selection_3:
  CommandLine|contains:
  - copy lsass.exe_
  - move lsass.exe_
```

## MITRE ATT&CK
- T1036
- T1003.001

## False Positives
- False positives are expected in cases in which ProcDump just gets copied to a different directory without any renaming

## References
- https://twitter.com/mrd0x/status/1480785527901204481

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-11
- **Rule ID:** `79b06761-465f-4f88-9ef2-150e24d3d737`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_procdump_evasion.yml`

---
type: detection_rule
title: "HackTool - CrackMapExec Process Patterns"
rule_id: f26307d8-14cd-47e3-a26b-4b4769f24af6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - CrackMapExec Process Patterns

## Description
Detects suspicious process patterns found in logs when CrackMapExec is used

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection_lsass_dump1:
  CommandLine|contains:
  - 'cmd.exe /c '
  - 'cmd.exe /r '
  - 'cmd.exe /k '
  - 'cmd /c '
  - 'cmd /r '
  - 'cmd /k '
  CommandLine|contains|all:
  - 'tasklist /fi '
  - Imagename eq lsass.exe
  User|contains:
  - AUTHORI
  - AUTORI
selection_lsass_dump2:
  CommandLine|contains|all:
  - do rundll32.exe C:\windows\System32\comsvcs.dll, MiniDump
  - \Windows\Temp\
  - ' full'
  - '%%B'
selection_procdump:
  CommandLine|contains|all:
  - tasklist /v /fo csv
  - findstr /i "lsass"
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://mpgn.gitbook.io/crackmapexec/smb-protocol/obtaining-credentials/dump-lsass

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-12
- **Rule ID:** `f26307d8-14cd-47e3-a26b-4b4769f24af6`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_crackmapexec_patterns.yml`

---
type: detection_rule
title: "Suspicious BitLocker Access Agent Update Utility Execution"
rule_id: 9f38c1db-e2ae-40bf-81d0-5b68f73fb512
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218, attack.t1021.003]
---

# Suspicious BitLocker Access Agent Update Utility Execution

## Description
Detects the execution of the BitLocker Access Agent Update Utility (baaupdate.exe) which is not a common parent process for other processes.
Suspicious child processes spawned by baaupdate.exe could indicate an attempt at lateral movement via BitLocker DCOM & COM Hijacking.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \bitsadmin.exe
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell_ise.exe
  - \powershell.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \schtasks.exe
  - \wmic.exe
  - \wscript.exe
  ParentImage|endswith: \baaupdate.exe
```

## MITRE ATT&CK
- T1218
- T1021.003

## False Positives
- Unknown

## References
- https://github.com/rtecCyberSec/BitlockMove

## Metadata
- **Author:** andrewdanis, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-10-18
- **Rule ID:** `9f38c1db-e2ae-40bf-81d0-5b68f73fb512`
- **Source file:** `windows/process_creation/proc_creation_win_baaupdate_susp_child_process.yml`

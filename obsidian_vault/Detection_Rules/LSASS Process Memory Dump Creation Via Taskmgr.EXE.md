---
type: detection_rule
title: "LSASS Process Memory Dump Creation Via Taskmgr.EXE"
rule_id: 69ca12af-119d-44ed-b50f-a47af0ebc364
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# LSASS Process Memory Dump Creation Via Taskmgr.EXE

## Description
Detects the creation of an "lsass.dmp" file by the taskmgr process. This indicates a manual dumping of the LSASS.exe process memory using Windows Task Manager.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - :\Windows\system32\taskmgr.exe
  - :\Windows\SysWOW64\taskmgr.exe
  TargetFilename|contains|all:
  - \AppData\Local\Temp\
  - \lsass
  - .DMP
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Rare case of troubleshooting by an administrator or support that has to be investigated regardless

## References
- https://github.com/redcanaryco/atomic-red-team/blob/987e3ca988ae3cff4b9f6e388c139c05bf44bbb8/atomics/T1003.001/T1003.001.md#L1

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2023-10-19
- **Rule ID:** `69ca12af-119d-44ed-b50f-a47af0ebc364`
- **Source file:** `windows/file/file_event/file_event_win_taskmgr_lsass_dump.yml`

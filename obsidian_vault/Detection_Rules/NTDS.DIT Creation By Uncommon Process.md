---
type: detection_rule
title: "NTDS.DIT Creation By Uncommon Process"
rule_id: 11b1ed55-154d-4e82-8ad7-83739298f720
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.002, attack.t1003.003]
---

# NTDS.DIT Creation By Uncommon Process

## Description
Detects creation of a file named "ntds.dit" (Active Directory Database) by an uncommon process or a process located in a suspicious directory

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection_ntds and 1 of selection_process_*
selection_ntds:
  TargetFilename|endswith: \ntds.dit
selection_process_img:
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
  - \wsl.exe
  - \wt.exe
selection_process_paths:
  Image|contains:
  - \AppData\
  - \Temp\
  - \Public\
  - \PerfLogs\
```

## MITRE ATT&CK
- T1003.002
- T1003.003

## False Positives
- Unknown

## References
- https://stealthbits.com/blog/extracting-password-hashes-from-the-ntds-dit-file/
- https://adsecurity.org/?p=2398

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-01-11
- **Rule ID:** `11b1ed55-154d-4e82-8ad7-83739298f720`
- **Source file:** `windows/file/file_event/file_event_win_ntds_dit_uncommon_process.yml`

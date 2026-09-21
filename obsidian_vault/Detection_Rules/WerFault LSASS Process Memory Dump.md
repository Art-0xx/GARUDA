---
type: detection_rule
title: "WerFault LSASS Process Memory Dump"
rule_id: c3e76af5-4ce0-4a14-9c9a-25ceb8fda182
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# WerFault LSASS Process Memory Dump

## Description
Detects WerFault creating a dump file with a name that indicates that the dump file could be an LSASS process memory, which contains user credentials

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image: C:\WINDOWS\system32\WerFault.exe
  TargetFilename|contains:
  - \lsass
  - lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unknown

## References
- https://github.com/helpsystems/nanodump

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-27
- **Rule ID:** `c3e76af5-4ce0-4a14-9c9a-25ceb8fda182`
- **Source file:** `windows/file/file_event/file_event_win_lsass_werfault_dump.yml`

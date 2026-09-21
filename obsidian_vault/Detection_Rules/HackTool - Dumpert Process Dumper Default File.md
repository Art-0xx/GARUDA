---
type: detection_rule
title: "HackTool - Dumpert Process Dumper Default File"
rule_id: 93d94efc-d7ad-4161-ad7d-1638c4f908d8
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - Dumpert Process Dumper Default File

## Description
Detects the creation of the default dump file used by Outflank Dumpert tool. A process dumper, which dumps the lsass process memory

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: dumpert.dmp
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Very unlikely

## References
- https://github.com/outflanknl/Dumpert
- https://unit42.paloaltonetworks.com/actors-still-exploiting-sharepoint-vulnerability/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-02-04
- **Rule ID:** `93d94efc-d7ad-4161-ad7d-1638c4f908d8`
- **Source file:** `windows/file/file_event/file_event_win_hktl_dumpert.yml`

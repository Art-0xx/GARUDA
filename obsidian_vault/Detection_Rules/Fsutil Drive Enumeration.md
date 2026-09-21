---
type: detection_rule
title: "Fsutil Drive Enumeration"
rule_id: 63de06b9-a385-40b5-8b32-73f2b9ef84b6
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1120]
---

# Fsutil Drive Enumeration

## Description
Attackers may leverage fsutil to enumerated connected drives.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: drives
selection_img:
- Image|endswith: \fsutil.exe
- OriginalFileName: fsutil.exe
```

## MITRE ATT&CK
- T1120

## False Positives
- Certain software or administrative tasks may trigger false positives.

## References
- Turla has used fsutil fsinfo drives to list connected drives.
- https://github.com/elastic/detection-rules/blob/414d32027632a49fb239abb8fbbb55d3fa8dd861/rules/windows/discovery_peripheral_device.toml

## Metadata
- **Author:** Christopher Peacock '@securepeacock', SCYTHE '@scythe_io'
- **Date:** 2022-03-29
- **Rule ID:** `63de06b9-a385-40b5-8b32-73f2b9ef84b6`
- **Source file:** `windows/process_creation/proc_creation_win_fsutil_drive_enumeration.yml`

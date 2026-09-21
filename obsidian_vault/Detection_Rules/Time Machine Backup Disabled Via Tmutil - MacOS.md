---
type: detection_rule
title: "Time Machine Backup Disabled Via Tmutil - MacOS"
rule_id: 2c95fa8a-8b8d-4787-afce-7117ceb8e3da
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1490]
---

# Time Machine Backup Disabled Via Tmutil - MacOS

## Description
Detects disabling of Time Machine (Apple's automated backup utility software) via the native macOS backup utility "tmutil".
An attacker can use this to prevent backups from occurring.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains: disable
selection_img:
- Image|endswith: /tmutil
- CommandLine|contains: tmutil
```

## MITRE ATT&CK
- T1490

## False Positives
- Legitimate administrator activity

## References
- https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1490/T1490.md#atomic-test-12---disable-time-machine
- https://www.loobins.io/binaries/tmutil/

## Metadata
- **Author:** Pratinav Chandra
- **Date:** 2024-05-29
- **Rule ID:** `2c95fa8a-8b8d-4787-afce-7117ceb8e3da`
- **Source file:** `macos/process_creation/proc_creation_macos_tmutil_disable_backup.yml`

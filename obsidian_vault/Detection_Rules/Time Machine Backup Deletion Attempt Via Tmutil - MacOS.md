---
type: detection_rule
title: "Time Machine Backup Deletion Attempt Via Tmutil - MacOS"
rule_id: 452df256-da78-427a-866f-49fa04417d74
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1490]
---

# Time Machine Backup Deletion Attempt Via Tmutil - MacOS

## Description
Detects deletion attempts of MacOS Time Machine backups via the native backup utility "tmutil".
An adversary may perform this action before launching a ransonware attack to prevent the victim from restoring their files.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains: delete
selection_img:
- Image|endswith: /tmutil
- CommandLine|contains: tmutil
```

## MITRE ATT&CK
- T1490

## False Positives
- Legitimate activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/master/atomics/T1490/T1490.md#atomic-test-12---disable-time-machine
- https://www.loobins.io/binaries/tmutil/

## Metadata
- **Author:** Pratinav Chandra
- **Date:** 2024-05-29
- **Rule ID:** `452df256-da78-427a-866f-49fa04417d74`
- **Source file:** `macos/process_creation/proc_creation_macos_tmutil_delete_backup.yml`

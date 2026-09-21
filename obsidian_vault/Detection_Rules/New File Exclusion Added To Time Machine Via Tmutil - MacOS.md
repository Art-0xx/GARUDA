---
type: detection_rule
title: "New File Exclusion Added To Time Machine Via Tmutil - MacOS"
rule_id: 9acf45ed-3a26-4062-bf08-56857613eb52
platform: macos
level: medium
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1490]
---

# New File Exclusion Added To Time Machine Via Tmutil - MacOS

## Description
Detects the addition of a new file or path exclusion to MacOS Time Machine via the "tmutil" utility.
An adversary could exclude a path from Time Machine backups to prevent certain files from being backed up.

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
  CommandLine|contains: addexclusion
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
- **Rule ID:** `9acf45ed-3a26-4062-bf08-56857613eb52`
- **Source file:** `macos/process_creation/proc_creation_macos_tmutil_exclude_file_from_backup.yml`

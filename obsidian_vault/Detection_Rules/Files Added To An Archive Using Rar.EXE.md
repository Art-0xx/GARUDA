---
type: detection_rule
title: "Files Added To An Archive Using Rar.EXE"
rule_id: 6f3e2987-db24-4c78-a860-b4f4095a7095
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# Files Added To An Archive Using Rar.EXE

## Description
Detects usage of "rar" to add files to an archive for potential compression. An adversary may compress data (e.g. sensitive documents) that is collected prior to exfiltration in order to make it portable and minimize the amount of data sent over the network.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: ' a '
  Image|endswith: \rar.exe
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Highly likely if rar is a default archiver in the monitored environment.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1560.001/T1560.001.md
- https://eqllib.readthedocs.io/en/latest/analytics/1ec33c93-3d0b-4a28-8014-dbdaae5c60ae.html

## Metadata
- **Author:** Timur Zinniatullin, E.M. Anhaus, oscd.community
- **Date:** 2019-10-21
- **Rule ID:** `6f3e2987-db24-4c78-a860-b4f4095a7095`
- **Source file:** `windows/process_creation/proc_creation_win_rar_compress_data.yml`

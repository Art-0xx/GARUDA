---
type: detection_rule
title: "Interactive AT Job"
rule_id: 60fc936d-2eb0-4543-8a13-911c750a1dfc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.002]
---

# Interactive AT Job

## Description
Detects an interactive AT job, which may be used as a form of privilege escalation.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: interactive
  Image|endswith: \at.exe
```

## MITRE ATT&CK
- T1053.002

## False Positives
- Unlikely (at.exe deprecated as of Windows 8)

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1053.002/T1053.002.md
- https://eqllib.readthedocs.io/en/latest/analytics/d8db43cf-ed52-4f5c-9fb3-c9a4b95a0b56.html

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `60fc936d-2eb0-4543-8a13-911c750a1dfc`
- **Source file:** `windows/process_creation/proc_creation_win_at_interactive_execution.yml`

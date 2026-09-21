---
type: detection_rule
title: "Discovery of a System Time"
rule_id: b243b280-65fe-48df-ba07-6ddea7646427
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1124]
---

# Discovery of a System Time

## Description
Identifies use of various commands to query a systems time. This technique may be used before executing a scheduled task or to discover the time zone of a target system.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_time:
  CommandLine|contains: time
  Image|endswith:
  - \net.exe
  - \net1.exe
selection_w32tm:
  CommandLine|contains: tz
  Image|endswith: \w32tm.exe
```

## MITRE ATT&CK
- T1124

## False Positives
- Legitimate use of the system utilities to discover system time for legitimate reason

## References
- https://eqllib.readthedocs.io/en/latest/analytics/fcdb99c2-ac3c-4bde-b664-4b336329bed2.html
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1124/T1124.md

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `b243b280-65fe-48df-ba07-6ddea7646427`
- **Source file:** `windows/process_creation/proc_creation_win_remote_time_discovery.yml`

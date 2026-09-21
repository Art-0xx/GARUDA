---
type: detection_rule
title: "Suspicious Process Start Locations"
rule_id: 15b75071-74cc-47e0-b4c6-b43744a62a2b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Suspicious Process Start Locations

## Description
Detects suspicious process run from unusual locations

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|contains:
  - :\RECYCLER\
  - :\SystemVolumeInformation\
- Image|startswith:
  - C:\Windows\Tasks\
  - C:\Windows\debug\
  - C:\Windows\fonts\
  - C:\Windows\help\
  - C:\Windows\drivers\
  - C:\Windows\addins\
  - C:\Windows\cursors\
  - C:\Windows\system32\tasks\
```

## MITRE ATT&CK
- T1036

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://car.mitre.org/wiki/CAR-2013-05-002

## Metadata
- **Author:** juju4, Jonhnathan Ribeiro, oscd.community
- **Date:** 2019-01-16
- **Rule ID:** `15b75071-74cc-47e0-b4c6-b43744a62a2b`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_run_locations.yml`

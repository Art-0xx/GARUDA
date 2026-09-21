---
type: detection_rule
title: "Hijack Legit RDP Session to Move Laterally"
rule_id: 52753ea4-b3a0-4365-910d-36cff487b789
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1219.002]
---

# Hijack Legit RDP Session to Move Laterally

## Description
Detects the usage of tsclient share to place a backdoor on the RDP source machine's startup folder

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \mstsc.exe
  TargetFilename|contains: \Microsoft\Windows\Start Menu\Programs\Startup\
```

## MITRE ATT&CK
- T1219.002

## False Positives
- Unlikely

## References
- Internal Research

## Metadata
- **Author:** Samir Bousseaden
- **Date:** 2019-02-21
- **Rule ID:** `52753ea4-b3a0-4365-910d-36cff487b789`
- **Source file:** `windows/file/file_event/file_event_win_tsclient_filewrite_startup.yml`

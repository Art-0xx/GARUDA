---
type: detection_rule
title: "Suspicious Creation with Colorcpl"
rule_id: e15b518d-b4ce-4410-a9cd-501f23ce4a18
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564]
---

# Suspicious Creation with Colorcpl

## Description
Once executed, colorcpl.exe will copy the arbitrary file to c:\windows\system32\spool\drivers\color\

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_ext:
  TargetFilename|endswith:
  - .icm
  - .gmmp
  - .cdmp
  - .camp
selection:
  Image|endswith: \colorcpl.exe
```

## MITRE ATT&CK
- T1564

## False Positives
- Unknown

## References
- https://twitter.com/eral4m/status/1480468728324231172?s=20

## Metadata
- **Author:** frack113
- **Date:** 2022-01-21
- **Rule ID:** `e15b518d-b4ce-4410-a9cd-501f23ce4a18`
- **Source file:** `windows/file/file_event/file_event_win_susp_colorcpl.yml`

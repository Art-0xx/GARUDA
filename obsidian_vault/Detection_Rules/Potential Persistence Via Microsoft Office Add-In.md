---
type: detection_rule
title: "Potential Persistence Via Microsoft Office Add-In"
rule_id: 8e1cb247-6cf6-42fa-b440-3f27d57e9936
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137.006]
---

# Potential Persistence Via Microsoft Office Add-In

## Description
Detects potential persistence activity via startup add-ins that load when Microsoft Office starts (.wll/.xll are simply .dll fit for Word or Excel).

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_generic:
  TargetFilename|contains: \Microsoft\Addins\
  TargetFilename|endswith:
  - .xlam
  - .xla
  - .ppam
selection_wlldropped:
  TargetFilename|contains: \Microsoft\Word\Startup\
  TargetFilename|endswith: .wll
selection_xladropped:
  TargetFilename|contains: Microsoft\Excel\XLSTART\
  TargetFilename|endswith: .xlam
selection_xlldropped:
  TargetFilename|contains: \Microsoft\Excel\Startup\
  TargetFilename|endswith: .xll
```

## MITRE ATT&CK
- T1137.006

## False Positives
- Legitimate add-ins

## References
- Internal Research
- https://labs.withsecure.com/publications/add-in-opportunities-for-office-persistence
- https://github.com/redcanaryco/atomic-red-team/blob/4ae9580a1a8772db87a1b6cdb0d03e5af231e966/atomics/T1137.006/T1137.006.md

## Metadata
- **Author:** NVISO
- **Date:** 2020-05-11
- **Rule ID:** `8e1cb247-6cf6-42fa-b440-3f27d57e9936`
- **Source file:** `windows/file/file_event/file_event_win_office_addin_persistence.yml`

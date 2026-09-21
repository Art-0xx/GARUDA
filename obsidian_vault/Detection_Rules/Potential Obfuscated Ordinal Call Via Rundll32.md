---
type: detection_rule
title: "Potential Obfuscated Ordinal Call Via Rundll32"
rule_id: 43fa5350-db63-4b8f-9a01-789a427074e1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1027.010]
---

# Potential Obfuscated Ordinal Call Via Rundll32

## Description
Detects execution of "rundll32" with potential obfuscated ordinal calls

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - '#+'
  - '#-'
  - '#0'
  - '#655'
  - '#656'
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
- CommandLine|contains: rundll32
```

## MITRE ATT&CK
- T1027.010

## False Positives
- Unknown

## References
- Internal Research
- https://www.youtube.com/watch?v=52tAmVLg1KM&t=2070s

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2023-05-17
- **Rule ID:** `43fa5350-db63-4b8f-9a01-789a427074e1`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_obfuscated_ordinal_call.yml`

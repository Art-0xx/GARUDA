---
type: detection_rule
title: "UAC Bypass Using Consent and Comctl32 - Process"
rule_id: 1ca6bd18-0ba0-44ca-851c-92ed89a61085
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Consent and Comctl32 - Process

## Description
Detects the pattern of UAC Bypass using consent.exe and comctl32.dll (UACMe 22)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \werfault.exe
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentImage|endswith: \consent.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `1ca6bd18-0ba0-44ca-851c-92ed89a61085`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_consent_comctl32.yml`

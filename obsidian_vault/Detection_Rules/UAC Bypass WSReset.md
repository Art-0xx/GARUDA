---
type: detection_rule
title: "UAC Bypass WSReset"
rule_id: 89a9a0e0-f61a-42e5-8957-b1479565a658
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass WSReset

## Description
Detects the pattern of UAC Bypass via WSReset usable by default sysmon-config

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \wsreset.exe
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Wsreset/
- https://github.com/hfiref0x/UACME
- https://medium.com/falconforce/falconfriday-detecting-uac-bypasses-0xff16-86c2a9107abf

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `89a9a0e0-f61a-42e5-8957-b1479565a658`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_wsreset_integrity_level.yml`

---
type: detection_rule
title: "UAC Bypass Using WOW64 Logger DLL Hijack"
rule_id: 4f6c43e2-f989-4ea5-bcd8-843b49a0317c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using WOW64 Logger DLL Hijack

## Description
Detects the pattern of UAC Bypass using a WoW64 logger DLL hijack (UACMe 30)

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|startswith: UNKNOWN(0000000000000000)|UNKNOWN(0000000000000000)|
  GrantedAccess: '0x1fffff'
  SourceImage|contains: :\Windows\SysWOW64\
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
- **Rule ID:** `4f6c43e2-f989-4ea5-bcd8-843b49a0317c`
- **Source file:** `windows/process_access/proc_access_win_uac_bypass_wow64_logger.yml`

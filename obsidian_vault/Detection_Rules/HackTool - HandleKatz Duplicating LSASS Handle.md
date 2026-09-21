---
type: detection_rule
title: "HackTool - HandleKatz Duplicating LSASS Handle"
rule_id: b1bd3a59-c1fd-4860-9f40-4dd161a7d1f5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1106, attack.t1003.001]
---

# HackTool - HandleKatz Duplicating LSASS Handle

## Description
Detects HandleKatz opening LSASS to duplicate its handle to later dump the memory without opening any new handles

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains: '|UNKNOWN('
  CallTrace|endswith: )
  CallTrace|startswith: C:\Windows\System32\ntdll.dll+
  GrantedAccess: '0x1440'
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1106
- T1003.001

## False Positives
- Unknown

## References
- https://github.com/codewhitesec/HandleKatz

## Metadata
- **Author:** Bhabesh Raj (rule), @thefLinkk
- **Date:** 2022-06-27
- **Rule ID:** `b1bd3a59-c1fd-4860-9f40-4dd161a7d1f5`
- **Source file:** `windows/process_access/proc_access_win_hktl_handlekatz_lsass_access.yml`

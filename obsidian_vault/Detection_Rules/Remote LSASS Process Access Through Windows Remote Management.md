---
type: detection_rule
title: "Remote LSASS Process Access Through Windows Remote Management"
rule_id: aa35a627-33fb-4d04-a165-d33b4afca3e8
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001, attack.t1059.001, attack.t1021.006]
---

# Remote LSASS Process Access Through Windows Remote Management

## Description
Detects remote access to the LSASS process via WinRM. This could be a sign of credential dumping from tools like mimikatz.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_access:
  GrantedAccess: '0x80000000'
selection:
  SourceImage|endswith: :\Windows\system32\wsmprovhost.exe
  TargetImage|endswith: \lsass.exe
```

## MITRE ATT&CK
- T1003.001
- T1059.001
- T1021.006

## False Positives
- Unlikely

## References
- https://pentestlab.blog/2018/05/15/lateral-movement-winrm/

## Metadata
- **Author:** Patryk Prauze - ING Tech
- **Date:** 2019-05-20
- **Rule ID:** `aa35a627-33fb-4d04-a165-d33b4afca3e8`
- **Source file:** `windows/process_access/proc_access_win_lsass_remote_access_trough_winrm.yml`

---
type: detection_rule
title: "UAC Bypass Using ChangePK and SLUI"
rule_id: 503d581c-7df0-4bbe-b9be-5840c0ecc1fc
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using ChangePK and SLUI

## Description
Detects an UAC bypass that uses changepk.exe and slui.exe (UACMe 61)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \changepk.exe
  IntegrityLevel:
  - High
  - System
  - S-1-16-16384
  - S-1-16-12288
  ParentImage|endswith: \slui.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://mattharr0ey.medium.com/privilege-escalation-uac-bypass-in-changepk-c40b92818d1b
- https://github.com/hfiref0x/UACME
- https://medium.com/falconforce/falconfriday-detecting-uac-bypasses-0xff16-86c2a9107abf

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `503d581c-7df0-4bbe-b9be-5840c0ecc1fc`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_changepk_slui.yml`

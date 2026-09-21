---
type: detection_rule
title: "Password Set to Never Expire via WMI"
rule_id: 7864a175-3654-4824-9f0d-f0da18ab27c0
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1098]
---

# Password Set to Never Expire via WMI

## Description
Detects the use of wmic.exe to modify user account settings and explicitly disable password expiration.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - useraccount
  - ' set '
  - passwordexpires
  - 'false'
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
```

## MITRE ATT&CK
- T1047
- T1098

## False Positives
- Legitimate administrative activity

## References
- https://www.huntress.com/blog/the-unwanted-guest

## Metadata
- **Author:** Daniel Koifman (KoifSec)
- **Date:** 2025-07-30
- **Rule ID:** `7864a175-3654-4824-9f0d-f0da18ab27c0`
- **Source file:** `windows/process_creation/proc_creation_win_wmi_password_never_expire.yml`

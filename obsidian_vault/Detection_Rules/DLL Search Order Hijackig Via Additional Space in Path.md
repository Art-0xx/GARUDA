---
type: detection_rule
title: "DLL Search Order Hijackig Via Additional Space in Path"
rule_id: b6f91281-20aa-446a-b986-38a92813a18f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# DLL Search Order Hijackig Via Additional Space in Path

## Description
Detects when an attacker create a similar folder structure to windows system folders such as (Windows, Program Files...)
but with a space in order to trick DLL load search order and perform a "DLL Search Order Hijacking" attack

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: .dll
  TargetFilename|startswith:
  - C:\Windows \
  - C:\Program Files \
  - C:\Program Files (x86) \
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://twitter.com/cyb3rops/status/1552932770464292864
- https://www.wietzebeukema.nl/blog/hijacking-dlls-in-windows

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-30
- **Rule ID:** `b6f91281-20aa-446a-b986-38a92813a18f`
- **Source file:** `windows/file/file_event/file_event_win_dll_sideloading_space_path.yml`

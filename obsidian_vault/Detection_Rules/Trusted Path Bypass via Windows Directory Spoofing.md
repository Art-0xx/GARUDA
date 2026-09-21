---
type: detection_rule
title: "Trusted Path Bypass via Windows Directory Spoofing"
rule_id: 0cbe38c0-270c-41d9-ab79-6e5a9a669290
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.007, attack.t1548.002]
---

# Trusted Path Bypass via Windows Directory Spoofing

## Description
Detects DLLs loading from a spoofed Windows directory path with an extra space (e.g "C:\Windows \System32") which can bypass Windows trusted path verification.
This technique tricks Windows into treating the path as trusted, allowing malicious DLLs to load with high integrity privileges bypassing UAC.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|contains:
  - :\Windows \System32\
  - :\Windows \SysWOW64\
```

## MITRE ATT&CK
- T1574.007
- T1548.002

## False Positives
- Unlikely

## References
- https://x.com/Wietze/status/1933495426952421843

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-06-17
- **Rule ID:** `0cbe38c0-270c-41d9-ab79-6e5a9a669290`
- **Source file:** `windows/image_load/image_load_win_trusted_path_bypass.yml`

---
type: detection_rule
title: "TrustedPath UAC Bypass Pattern"
rule_id: 4ac47ed3-44c2-4b1f-9d51-bf46e8914126
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# TrustedPath UAC Bypass Pattern

## Description
Detects indicators of a UAC bypass method by mocking directories

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains:
  - C:\Windows \System32\
  - C:\Windows \SysWOW64\
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://medium.com/tenable-techblog/uac-bypass-by-mocking-trusted-directories-24a96675f6e
- https://www.wietzebeukema.nl/blog/hijacking-dlls-in-windows
- https://github.com/netero1010/TrustedPath-UACBypass-BOF
- https://x.com/Wietze/status/1933495426952421843

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-08-27
- **Rule ID:** `4ac47ed3-44c2-4b1f-9d51-bf46e8914126`
- **Source file:** `windows/process_creation/proc_creation_win_uac_bypass_trustedpath.yml`

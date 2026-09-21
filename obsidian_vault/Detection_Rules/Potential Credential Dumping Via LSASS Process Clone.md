---
type: detection_rule
title: "Potential Credential Dumping Via LSASS Process Clone"
rule_id: c8da0dfd-4ed0-4b68-962d-13c9c884384e
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003, attack.t1003.001]
---

# Potential Credential Dumping Via LSASS Process Clone

## Description
Detects a suspicious LSASS process process clone that could be a sign of credential dumping activity

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \Windows\System32\lsass.exe
  ParentImage|endswith: \Windows\System32\lsass.exe
```

## MITRE ATT&CK
- T1003
- T1003.001

## False Positives
- Unknown

## References
- https://www.matteomalvica.com/blog/2019/12/02/win-defender-atp-cred-bypass/
- https://twitter.com/Hexacorn/status/1420053502554951689
- https://twitter.com/SBousseaden/status/1464566846594691073?s=20

## Metadata
- **Author:** Florian Roth (Nextron Systems), Samir Bousseaden
- **Date:** 2021-11-27
- **Rule ID:** `c8da0dfd-4ed0-4b68-962d-13c9c884384e`
- **Source file:** `windows/process_creation/proc_creation_win_lsass_process_clone.yml`

---
type: detection_rule
title: "PUA - Nmap/Zenmap Execution"
rule_id: f6ecd1cf-19b8-4488-97f6-00f0924991a3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1046]
---

# PUA - Nmap/Zenmap Execution

## Description
Detects usage of namp/zenmap. Adversaries may attempt to get a listing of services running on remote hosts, including those that may be vulnerable to remote software exploitation

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith:
  - \nmap.exe
  - \zennmap.exe
- OriginalFileName:
  - nmap.exe
  - zennmap.exe
```

## MITRE ATT&CK
- T1046

## False Positives
- Legitimate administrator activity

## References
- https://nmap.org/
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1046/T1046.md#atomic-test-3---port-scan-nmap-for-windows

## Metadata
- **Author:** frack113
- **Date:** 2021-12-10
- **Rule ID:** `f6ecd1cf-19b8-4488-97f6-00f0924991a3`
- **Source file:** `windows/process_creation/proc_creation_win_pua_nmap_zenmap.yml`

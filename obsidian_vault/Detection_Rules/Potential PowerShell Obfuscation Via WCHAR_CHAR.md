---
type: detection_rule
title: "Potential PowerShell Obfuscation Via WCHAR/CHAR"
rule_id: e312efd0-35a1-407f-8439-b8d434b438a6
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1027]
---

# Potential PowerShell Obfuscation Via WCHAR/CHAR

## Description
Detects suspicious encoded character syntax often used for defense evasion

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - '[char]0x'
  - (WCHAR)0x
```

## MITRE ATT&CK
- T1059.001
- T1027

## False Positives
- Unknown

## References
- https://twitter.com/0gtweet/status/1281103918693482496

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2020-07-09
- **Rule ID:** `e312efd0-35a1-407f-8439-b8d434b438a6`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_obfuscation_via_utf8.yml`

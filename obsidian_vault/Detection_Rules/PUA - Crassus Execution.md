---
type: detection_rule
title: "PUA - Crassus Execution"
rule_id: 2c32b543-1058-4808-91c6-5b31b8bed6c5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1590.001]
---

# PUA - Crassus Execution

## Description
Detects Crassus, a Windows privilege escalation discovery tool, based on PE metadata characteristics.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \Crassus.exe
- OriginalFileName: Crassus.exe
- Description|contains: Crassus
```

## MITRE ATT&CK
- T1590.001

## False Positives
- Unlikely

## References
- https://github.com/vu-ls/Crassus

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2023-04-17
- **Rule ID:** `2c32b543-1058-4808-91c6-5b31b8bed6c5`
- **Source file:** `windows/process_creation/proc_creation_win_pua_crassus.yml`

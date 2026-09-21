---
type: detection_rule
title: "HackTool - LittleCorporal Generated Maldoc Injection"
rule_id: 7bdde3bf-2a42-4c39-aa31-a92b3e17afac
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002, attack.t1055.003]
---

# HackTool - LittleCorporal Generated Maldoc Injection

## Description
Detects the process injection of a LittleCorporal generated Maldoc.

## Log Source
```yaml
category: process_access
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CallTrace|contains|all:
  - :\Windows\Microsoft.NET\Framework64\v2.
  - UNKNOWN
  SourceImage|endswith: \winword.exe
```

## MITRE ATT&CK
- T1204.002
- T1055.003

## False Positives
- Unknown

## References
- https://github.com/connormcgarr/LittleCorporal

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-08-09
- **Rule ID:** `7bdde3bf-2a42-4c39-aa31-a92b3e17afac`
- **Source file:** `windows/process_access/proc_access_win_hktl_littlecorporal_generated_maldoc.yml`

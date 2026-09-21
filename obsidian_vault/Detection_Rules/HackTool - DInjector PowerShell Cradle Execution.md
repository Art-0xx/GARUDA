---
type: detection_rule
title: "HackTool - DInjector PowerShell Cradle Execution"
rule_id: d78b5d61-187d-44b6-bf02-93486a80de5a
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055]
---

# HackTool - DInjector PowerShell Cradle Execution

## Description
Detects the use of the Dinject PowerShell cradle based on the specific flags

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - ' /am51'
  - ' /password'
```

## MITRE ATT&CK
- T1055

## False Positives
- Unlikely

## References
- https://web.archive.org/web/20211001064856/https://github.com/snovvcrash/DInjector

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-12-07
- **Rule ID:** `d78b5d61-187d-44b6-bf02-93486a80de5a`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_dinjector.yml`

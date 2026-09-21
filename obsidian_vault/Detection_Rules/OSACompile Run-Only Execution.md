---
type: detection_rule
title: "OSACompile Run-Only Execution"
rule_id: b9d9b652-d8ed-4697-89a2-a1186ee680ac
platform: macos
level: high
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059.002]
---

# OSACompile Run-Only Execution

## Description
Detects potential suspicious run-only executions compiled using OSACompile

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - osacompile
  - ' -x '
  - ' -e '
```

## MITRE ATT&CK
- T1059.002

## False Positives
- Unknown

## References
- https://redcanary.com/blog/applescript/
- https://ss64.com/osx/osacompile.html

## Metadata
- **Author:** Sohan G (D4rkCiph3r)
- **Date:** 2023-01-31
- **Rule ID:** `b9d9b652-d8ed-4697-89a2-a1186ee680ac`
- **Source file:** `macos/process_creation/proc_creation_macos_osacompile_runonly_execution.yml`

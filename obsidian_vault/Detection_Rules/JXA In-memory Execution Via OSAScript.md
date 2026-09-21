---
type: detection_rule
title: "JXA In-memory Execution Via OSAScript"
rule_id: f1408a58-0e94-4165-b80a-da9f96cf6fc3
platform: macos
level: high
status: test
tags: [detection, sigma, macos]
mitre_tags: [attack.t1059.002, attack.t1059.007]
---

# JXA In-memory Execution Via OSAScript

## Description
Detects possible malicious execution of JXA in-memory via OSAScript

## Log Source
```yaml
category: process_creation
product: macos
```

## Detection Logic
```yaml
condition: all of selection_*
selection_js:
- CommandLine|contains|all:
  - ' -l '
  - JavaScript
- CommandLine|contains: .js
selection_main:
  CommandLine|contains|all:
  - osascript
  - ' -e '
  - eval
  - NSData.dataWithContentsOfURL
```

## MITRE ATT&CK
- T1059.002
- T1059.007

## False Positives
- Unknown

## References
- https://redcanary.com/blog/applescript/

## Metadata
- **Author:** Sohan G (D4rkCiph3r)
- **Date:** 2023-01-31
- **Rule ID:** `f1408a58-0e94-4165-b80a-da9f96cf6fc3`
- **Source file:** `macos/process_creation/proc_creation_macos_jxa_in_memory_execution.yml`

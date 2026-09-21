---
type: detection_rule
title: "Persistence Via TypedPaths - CommandLine"
rule_id: ec88289a-7e1a-4cc3-8d18-bd1f60e4b9ba
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Persistence Via TypedPaths - CommandLine

## Description
Detects modification addition to the 'TypedPaths' key in the user or admin registry via the commandline. Which might indicate persistence attempt

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains: \Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths
```

## False Positives
- Unknown

## References
- https://twitter.com/dez_/status/1560101453150257154
- https://forensafe.com/blogs/typedpaths.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-22
- **Rule ID:** `ec88289a-7e1a-4cc3-8d18-bd1f60e4b9ba`
- **Source file:** `windows/process_creation/proc_creation_win_registry_typed_paths_persistence.yml`

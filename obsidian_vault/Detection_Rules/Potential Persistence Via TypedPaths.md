---
type: detection_rule
title: "Potential Persistence Via TypedPaths"
rule_id: 086ae989-9ca6-4fe7-895a-759c5544f247
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via TypedPaths

## Description
Detects modification addition to the 'TypedPaths' key in the user or admin registry from a non standard application. Which might indicate persistence attempt

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Image:
  - C:\Windows\explorer.exe
  - C:\Windows\SysWOW64\explorer.exe
selection:
  TargetObject|contains: \Software\Microsoft\Windows\CurrentVersion\Explorer\TypedPaths\
```

## False Positives
- Unlikely

## References
- https://twitter.com/dez_/status/1560101453150257154
- https://forensafe.com/blogs/typedpaths.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-22
- **Rule ID:** `086ae989-9ca6-4fe7-895a-759c5544f247`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_typed_paths.yml`

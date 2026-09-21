---
type: detection_rule
title: "Potential Persistence Via Excel Add-in - Registry"
rule_id: 961e33d1-4f86-4fcf-80ab-930a708b2f82
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137.006]
---

# Potential Persistence Via Excel Add-in - Registry

## Description
Detect potential persistence via the creation of an excel add-in (XLL) file to make it run automatically when Excel is started.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details|endswith: .xll
  Details|startswith: '/R '
  TargetObject|contains: Software\Microsoft\Office\
  TargetObject|endswith: \Excel\Options
```

## MITRE ATT&CK
- T1137.006

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/4ae9580a1a8772db87a1b6cdb0d03e5af231e966/atomics/T1137.006/T1137.006.md
- https://labs.withsecure.com/publications/add-in-opportunities-for-office-persistence

## Metadata
- **Author:** frack113
- **Date:** 2023-01-15
- **Rule ID:** `961e33d1-4f86-4fcf-80ab-930a708b2f82`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_xll.yml`

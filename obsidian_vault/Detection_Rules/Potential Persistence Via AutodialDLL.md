---
type: detection_rule
title: "Potential Persistence Via AutodialDLL"
rule_id: e6fe26ee-d063-4f5b-b007-39e90aaf50e3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via AutodialDLL

## Description
Detects change the the "AutodialDLL" key which could be used as a persistence method to load custom DLL via the "ws2_32" library

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \Services\WinSock2\Parameters\AutodialDLL
```

## False Positives
- Unlikely

## References
- https://www.hexacorn.com/blog/2015/01/13/beyond-good-ol-run-key-part-24/
- https://persistence-info.github.io/Data/autodialdll.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-10
- **Rule ID:** `e6fe26ee-d063-4f5b-b007-39e90aaf50e3`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_autodial_dll.yml`

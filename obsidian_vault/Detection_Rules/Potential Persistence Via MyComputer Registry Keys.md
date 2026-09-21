---
type: detection_rule
title: "Potential Persistence Via MyComputer Registry Keys"
rule_id: 8fbe98a8-8f9d-44f8-aa71-8c572e29ef06
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via MyComputer Registry Keys

## Description
Detects modification to the "Default" value of the "MyComputer" key and subkeys to point to a custom binary that will be launched whenever the associated action is executed (see reference section for example)

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \Microsoft\Windows\CurrentVersion\Explorer\MyComputer
  TargetObject|endswith: (Default)
```

## False Positives
- Unlikely but if you experience FPs add specific processes and locations you would like to monitor for

## References
- https://www.hexacorn.com/blog/2017/01/18/beyond-good-ol-run-key-part-55/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-09
- **Rule ID:** `8fbe98a8-8f9d-44f8-aa71-8c572e29ef06`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_mycomputer.yml`

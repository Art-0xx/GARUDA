---
type: detection_rule
title: "Potential Persistence Via CHM Helper DLL"
rule_id: 976dd1f2-a484-45ec-aa1d-0e87e882262b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via CHM Helper DLL

## Description
Detects when an attacker modifies the registry key "HtmlHelp Author" to achieve persistence

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains:
  - \Software\Microsoft\HtmlHelp Author\Location
  - \Software\WOW6432Node\Microsoft\HtmlHelp Author\Location
```

## False Positives
- Unknown

## References
- https://persistence-info.github.io/Data/htmlhelpauthor.html
- https://www.hexacorn.com/blog/2018/04/22/beyond-good-ol-run-key-part-76/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `976dd1f2-a484-45ec-aa1d-0e87e882262b`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_chm.yml`

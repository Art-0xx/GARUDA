---
type: detection_rule
title: "Persistence Via Hhctrl.ocx"
rule_id: f10ed525-97fe-4fed-be7c-2feecca941b1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Persistence Via Hhctrl.ocx

## Description
Detects when an attacker modifies the registry value of the "hhctrl" to point to a custom binary

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  Details: C:\Windows\System32\hhctrl.ocx
selection:
  TargetObject|contains: \CLSID\{52A2AAAE-085D-4187-97EA-8C30DB990436}\InprocServer32\(Default)
```

## False Positives
- Unlikely

## References
- https://persistence-info.github.io/Data/hhctrl.html
- https://www.hexacorn.com/blog/2018/04/23/beyond-good-ol-run-key-part-77/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `f10ed525-97fe-4fed-be7c-2feecca941b1`
- **Source file:** `windows/registry/registry_set/registry_set_hhctrl_persistence.yml`

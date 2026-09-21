---
type: detection_rule
title: "Potential Persistence Via DLLPathOverride"
rule_id: a1b1fd53-9c4a-444c-bae0-34a330fc7aa8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via DLLPathOverride

## Description
Detects when an attacker adds a new "DLLPathOverride" value to the "Natural Language" key in order to achieve persistence which will get invoked by "SearchIndexer.exe" process

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_root:
  TargetObject|contains: \SYSTEM\CurrentControlSet\Control\ContentIndex\Language\
selection_values:
  TargetObject|contains:
  - \StemmerDLLPathOverride
  - \WBDLLPathOverride
  - \StemmerClass
  - \WBreakerClass
```

## False Positives
- Unknown

## References
- https://persistence-info.github.io/Data/naturallanguage6.html
- https://www.hexacorn.com/blog/2018/12/30/beyond-good-ol-run-key-part-98/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `a1b1fd53-9c4a-444c-bae0-34a330fc7aa8`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_natural_language.yml`

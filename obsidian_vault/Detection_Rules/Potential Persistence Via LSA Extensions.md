---
type: detection_rule
title: "Potential Persistence Via LSA Extensions"
rule_id: 41f6531d-af6e-4c6e-918f-b946f2b85a36
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via LSA Extensions

## Description
Detects when an attacker modifies the "REG_MULTI_SZ" value named "Extensions" to include a custom DLL to achieve persistence via lsass.
The "Extensions" list contains filenames of DLLs being automatically loaded by lsass.exe. Each DLL has its InitializeLsaExtension() method called after loading.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \SYSTEM\CurrentControlSet\Control\LsaExtensionConfig\LsaSrv\Extensions
```

## False Positives
- Unlikely

## References
- https://persistence-info.github.io/Data/lsaaextension.html
- https://twitter.com/0gtweet/status/1476286368385019906

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `41f6531d-af6e-4c6e-918f-b946f2b85a36`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_lsa_extension.yml`

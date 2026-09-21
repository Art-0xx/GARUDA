---
type: detection_rule
title: "Potential Persistence Via Mpnotify"
rule_id: 92772523-d9c1-4c93-9547-b0ca500baba3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Persistence Via Mpnotify

## Description
Detects when an attacker register a new SIP provider for persistence and defense evasion

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\mpnotify
```

## False Positives
- Might trigger if a legitimate new SIP provider is registered. But this is not a common occurrence in an environment and should be investigated either way

## References
- https://persistence-info.github.io/Data/mpnotify.html
- https://www.youtube.com/watch?v=ggY3srD9dYs&ab_channel=GrzegorzTworek

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `92772523-d9c1-4c93-9547-b0ca500baba3`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_mpnotify.yml`

---
type: detection_rule
title: "Add Debugger Entry To Hangs Key For Persistence"
rule_id: 833ef470-fa01-4631-a79b-6f291c9ac498
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Add Debugger Entry To Hangs Key For Persistence

## Description
Detects when an attacker adds a new "Debugger" value to the "Hangs" key in order to achieve persistence which will get invoked when an application crashes

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: \SOFTWARE\Microsoft\Windows\Windows Error Reporting\Hangs\Debugger
```

## False Positives
- This value is not set by default but could be rarly used by administrators

## References
- https://persistence-info.github.io/Data/wer_debugger.html
- https://www.hexacorn.com/blog/2019/09/20/beyond-good-ol-run-key-part-116/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `833ef470-fa01-4631-a79b-6f291c9ac498`
- **Source file:** `windows/registry/registry_set/registry_set_hangs_debugger_persistence.yml`

---
type: detection_rule
title: "HackTool - NoFilter Execution"
rule_id: 7b14c76a-c602-4ae6-9717-eff868153fc0
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134, attack.t1134.001]
---

# HackTool - NoFilter Execution

## Description
Detects execution of NoFilter, a tool for abusing the Windows Filtering Platform for privilege escalation via hardcoded policy name indicators

## Log Source
```yaml
definition: 'Requirements: Audit Filtering Platform Policy Change needs to be enabled'
product: windows
service: security
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_5447:
  EventID: 5447
  FilterName|contains: RonPolicy
selection_5449:
  EventID: 5449
  ProviderContextName|contains: RonPolicy
```

## MITRE ATT&CK
- T1134
- T1134.001

## False Positives
- Unknown

## References
- https://github.com/deepinstinct/NoFilter/blob/121d215ab130c5e8e3ad45a7e7fcd56f4de97b4d/NoFilter/Consts.cpp
- https://github.com/deepinstinct/NoFilter
- https://www.deepinstinct.com/blog/nofilter-abusing-windows-filtering-platform-for-privilege-escalation
- https://x.com/_st0pp3r_/status/1742203752361128162?s=20

## Metadata
- **Author:** Stamatis Chatzimangou (st0pp3r)
- **Date:** 2024-01-05
- **Rule ID:** `7b14c76a-c602-4ae6-9717-eff868153fc0`
- **Source file:** `windows/builtin/security/win_security_hktl_nofilter.yml`

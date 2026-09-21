---
type: detection_rule
title: "Potential WerFault ReflectDebugger Registry Value Abuse"
rule_id: 0cf2e1c6-8d10-4273-8059-738778f981ad
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036.003]
---

# Potential WerFault ReflectDebugger Registry Value Abuse

## Description
Detects potential WerFault "ReflectDebugger" registry value abuse for persistence.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|endswith: \Microsoft\Windows\Windows Error Reporting\Hangs\ReflectDebugger
```

## MITRE ATT&CK
- T1036.003

## False Positives
- Unknown

## References
- https://cocomelonc.github.io/malware/2022/11/02/malware-pers-18.html
- https://www.hexacorn.com/blog/2018/08/31/beyond-good-ol-run-key-part-85/

## Metadata
- **Author:** X__Junior
- **Date:** 2023-05-18
- **Rule ID:** `0cf2e1c6-8d10-4273-8059-738778f981ad`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_reflectdebugger.yml`

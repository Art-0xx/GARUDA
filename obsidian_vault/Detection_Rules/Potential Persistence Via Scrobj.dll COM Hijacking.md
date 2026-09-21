---
type: detection_rule
title: "Potential Persistence Via Scrobj.dll COM Hijacking"
rule_id: fe20dda1-6f37-4379-bbe0-a98d400cae90
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.015]
---

# Potential Persistence Via Scrobj.dll COM Hijacking

## Description
Detect use of scrobj.dll as this DLL looks for the ScriptletURL key to get the location of the script to execute

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Details: C:\WINDOWS\system32\scrobj.dll
  TargetObject|endswith: InprocServer32\(Default)
```

## MITRE ATT&CK
- T1546.015

## False Positives
- Legitimate use of the dll.

## References
- https://github.com/redcanaryco/atomic-red-team/blob/40b77d63808dd4f4eafb83949805636735a1fd15/atomics/T1546.015/T1546.015.md

## Metadata
- **Author:** frack113
- **Date:** 2022-08-20
- **Rule ID:** `fe20dda1-6f37-4379-bbe0-a98d400cae90`
- **Source file:** `windows/registry/registry_set/registry_set_persistence_scrobj_dll.yml`

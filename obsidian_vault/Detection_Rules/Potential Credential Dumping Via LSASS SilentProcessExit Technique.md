---
type: detection_rule
title: "Potential Credential Dumping Via LSASS SilentProcessExit Technique"
rule_id: 55e29995-75e7-451a-bef0-6225e2f13597
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Potential Credential Dumping Via LSASS SilentProcessExit Technique

## Description
Detects changes to the Registry in which a monitor program gets registered to dump the memory of the lsass.exe process

## Log Source
```yaml
category: registry_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetObject|contains: Microsoft\Windows NT\CurrentVersion\SilentProcessExit\lsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unlikely

## References
- https://www.deepinstinct.com/2021/02/16/lsass-memory-dumps-are-stealthier-than-ever-before-part-2/
- https://oddvar.moe/2018/04/10/persistence-using-globalflags-in-image-file-execution-options-hidden-from-autoruns-exe/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-02-26
- **Rule ID:** `55e29995-75e7-451a-bef0-6225e2f13597`
- **Source file:** `windows/registry/registry_event/registry_event_silentprocessexit_lsass.yml`

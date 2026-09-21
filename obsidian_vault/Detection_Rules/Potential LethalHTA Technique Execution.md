---
type: detection_rule
title: "Potential LethalHTA Technique Execution"
rule_id: ed5d72a6-f8f4-479d-ba79-02f6a80d7471
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.005]
---

# Potential LethalHTA Technique Execution

## Description
Detects potential LethalHTA technique where the "mshta.exe" is spawned by an "svchost.exe" process

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \mshta.exe
  ParentImage|endswith: \svchost.exe
```

## MITRE ATT&CK
- T1218.005

## False Positives
- Unknown

## References
- https://codewhitesec.blogspot.com/2018/07/lethalhta.html

## Metadata
- **Author:** Markus Neis
- **Date:** 2018-06-07
- **Rule ID:** `ed5d72a6-f8f4-479d-ba79-02f6a80d7471`
- **Source file:** `windows/process_creation/proc_creation_win_mshta_lethalhta_technique.yml`

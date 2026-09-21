---
type: detection_rule
title: "MMC Loading Script Engines DLLs"
rule_id: a9c73e8b-3b2d-4c45-8ef2-5f9a9c9998ad
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.005, attack.t1218.014]
---

# MMC Loading Script Engines DLLs

## Description
Detects when the Microsoft Management Console (MMC) loads the DLL libraries like vbscript, jscript etc which might indicate an attempt
to execute malicious scripts within a trusted system process for bypassing application whitelisting or defense evasion.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|endswith:
  - \vbscript.dll
  - \jscript.dll
  - \jscript9.dll
  Image|endswith: \mmc.exe
```

## MITRE ATT&CK
- T1059.005
- T1218.014

## False Positives
- Legitimate MMC operations or extensions loading these libraries

## References
- https://tria.ge/241015-l98snsyeje/behavioral2
- https://www.elastic.co/security-labs/grimresource

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-02-05
- **Rule ID:** `a9c73e8b-3b2d-4c45-8ef2-5f9a9c9998ad`
- **Source file:** `windows/image_load/image_load_win_mmc_loads_script_engine_dll.yml`

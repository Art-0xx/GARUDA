---
type: detection_rule
title: "Suspicious Renamed Comsvcs DLL Loaded By Rundll32"
rule_id: 8cde342c-ba48-4b74-b615-172c330f2e93
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Suspicious Renamed Comsvcs DLL Loaded By Rundll32

## Description
Detects rundll32 loading a renamed comsvcs.dll to dump process memory

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ImageLoaded|endswith: \comsvcs.dll
selection:
  Hashes|contains:
  - IMPHASH=eed93054cb555f3de70eaa9787f32ebb
  - IMPHASH=5e0dbdec1fce52daae251a110b4f309d
  - IMPHASH=eadbccbb324829acb5f2bbe87e5549a8
  - IMPHASH=407ca0f7b523319d758a40d7c0193699
  - IMPHASH=281d618f4e6271e527e6386ea6f748de
  Image|endswith: \rundll32.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unlikely

## References
- https://twitter.com/sbousseaden/status/1555200155351228419

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-14
- **Rule ID:** `8cde342c-ba48-4b74-b615-172c330f2e93`
- **Source file:** `windows/image_load/image_load_dll_comsvcs_load_renamed_version_by_rundll32.yml`

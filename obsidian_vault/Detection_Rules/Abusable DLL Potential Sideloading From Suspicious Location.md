---
type: detection_rule
title: "Abusable DLL Potential Sideloading From Suspicious Location"
rule_id: 799a5f48-0ac1-4e0f-9152-71d137d48c2a
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Abusable DLL Potential Sideloading From Suspicious Location

## Description
Detects potential DLL sideloading of DLLs that are known to be abused from suspicious locations

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection_dll and 1 of selection_folders_*
selection_dll:
  ImageLoaded|endswith:
  - \coreclr.dll
  - \facesdk.dll
  - \HPCustPartUI.dll
  - \libcef.dll
  - \ZIPDLL.dll
selection_folders_1:
  ImageLoaded|contains:
  - :\Perflogs\
  - :\Users\Public\
  - \Temporary Internet
  - \Windows\Temp\
selection_folders_2:
- ImageLoaded|contains|all:
  - :\Users\
  - \Favorites\
- ImageLoaded|contains|all:
  - :\Users\
  - \Favourites\
- ImageLoaded|contains|all:
  - :\Users\
  - \Contacts\
- ImageLoaded|contains|all:
  - :\Users\
  - \Pictures\
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://www.trendmicro.com/en_us/research/23/f/behind-the-scenes-unveiling-the-hidden-workings-of-earth-preta.html
- https://research.checkpoint.com/2023/beyond-the-horizon-traveling-the-world-on-camaro-dragons-usb-flash-drives/

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-07-11
- **Rule ID:** `799a5f48-0ac1-4e0f-9152-71d137d48c2a`
- **Source file:** `windows/image_load/image_load_side_load_abused_dlls_susp_paths.yml`

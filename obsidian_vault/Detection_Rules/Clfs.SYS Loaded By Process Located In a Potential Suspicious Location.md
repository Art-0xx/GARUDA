---
type: detection_rule
title: "Clfs.SYS Loaded By Process Located In a Potential Suspicious Location"
rule_id: fb4e2211-6d08-426b-8e6f-0d4a161e3b1d
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Clfs.SYS Loaded By Process Located In a Potential Suspicious Location

## Description
Detects Clfs.sys being loaded by a process running from a potentially suspicious location. Clfs.sys is loaded as part of many CVEs exploits that targets Common Log File.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection_dll and 1 of selection_folders_*
selection_dll:
  ImageLoaded|endswith: \clfs.sys
selection_folders_1:
  Image|contains:
  - :\Perflogs\
  - :\Users\Public\
  - \Temporary Internet
  - \Windows\Temp\
selection_folders_2:
- Image|contains|all:
  - :\Users\
  - \Favorites\
- Image|contains|all:
  - :\Users\
  - \Favourites\
- Image|contains|all:
  - :\Users\
  - \Contacts\
- Image|contains|all:
  - :\Users\
  - \Pictures\
```

## MITRE ATT&CK
- T1059

## False Positives
- Unknown

## References
- https://ssd-disclosure.com/ssd-advisory-common-log-file-system-clfs-driver-pe/
- https://x.com/Threatlabz/status/1879956781360976155

## Metadata
- **Author:** X__Junior
- **Date:** 2025-01-20
- **Rule ID:** `fb4e2211-6d08-426b-8e6f-0d4a161e3b1d`
- **Source file:** `windows/image_load/image_load_clfs_load.yml`

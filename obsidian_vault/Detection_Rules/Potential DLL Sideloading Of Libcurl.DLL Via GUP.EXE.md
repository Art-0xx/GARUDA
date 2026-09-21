---
type: detection_rule
title: "Potential DLL Sideloading Of Libcurl.DLL Via GUP.EXE"
rule_id: e49b5745-1064-4ac1-9a2e-f687bc2dd37e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Potential DLL Sideloading Of Libcurl.DLL Via GUP.EXE

## Description
Detects potential DLL sideloading of "libcurl.dll" by the "gup.exe" process from an uncommon location

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_notepad_plusplus:
  Image|endswith: \Notepad++\updater\GUP.exe
selection:
  ImageLoaded|endswith: \libcurl.dll
  Image|endswith: \gup.exe
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://labs.withsecure.com/publications/fin7-target-veeam-servers

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-05
- **Rule ID:** `e49b5745-1064-4ac1-9a2e-f687bc2dd37e`
- **Source file:** `windows/image_load/image_load_side_load_gup_libcurl.yml`

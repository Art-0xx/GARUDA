---
type: detection_rule
title: "Potential Python DLL SideLoading"
rule_id: d36f7c12-14a3-4d48-b6b8-774b9c66f44d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Potential Python DLL SideLoading

## Description
Detects potential DLL sideloading of Python DLL files.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_default_install_paths:
- ImageLoaded|startswith:
  - C:\Program Files\Python3
  - C:\Program Files (x86)\Python3
- ImageLoaded|contains: \AppData\Local\Programs\Python\Python3
filter_main_legit_signature_details:
  Company: Python Software Foundation
  Description: Python
  Product: Python
  Signed: 'true'
filter_optional_anaconda:
  ImageLoaded|startswith: C:\ProgramData\Anaconda3\
filter_optional_cpython:
  ImageLoaded|contains:
  - \cpython\externals\
  - \cpython\PCbuild\
filter_optional_pyinstaller:
  ImageLoaded|contains: \AppData\Local\Temp\_MEI
  ImageLoaded|startswith: C:\Users
filter_optional_visual_studio:
  ImageLoaded|startswith: C:\Program Files\Microsoft Visual Studio\
selection:
  ImageLoaded|endswith:
  - \python39.dll
  - \python310.dll
  - \python311.dll
  - \python312.dll
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Legitimate software using Python DLLs

## References
- https://www.securonix.com/blog/seolurker-attack-campaign-uses-seo-poisoning-fake-google-ads-to-install-malware/
- https://thedfirreport.com/2024/09/30/nitrogen-campaign-drops-sliver-and-ends-with-blackcat-ransomware/
- https://github.com/wietze/HijackLibs/tree/dc9c9f2f94e6872051dab58fbafb043fdd8b4176/yml/3rd_party/python

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-10-06
- **Rule ID:** `d36f7c12-14a3-4d48-b6b8-774b9c66f44d`
- **Source file:** `windows/image_load/image_load_side_load_python.yml`

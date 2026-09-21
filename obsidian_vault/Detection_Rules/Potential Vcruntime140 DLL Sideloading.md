---
type: detection_rule
title: "Potential Vcruntime140 DLL Sideloading"
rule_id: d7a63acb-1284-49bc-bfea-7771146c8b1c
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Potential Vcruntime140 DLL Sideloading

## Description
Detects potential DLL sideloading of vcruntime140.dll, a common C++ runtime library.
Threat actors have been observed using DLL sideloading techniques to load malicious payloads under the guise of legitimate applications such as SqlWriter, SqlDumper etc.
Notably, APT29 has been documented leveraging WinELOADER to sideload vcruntime140.dll for executing malicious code.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_legitimate_path:
  ImageLoaded|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Program Files\
  - C:\Program Files (x86)\
filter_main_legitimate_signer:
  Description|endswith: C Runtime Library
  SignatureStatus: Valid
  Signed: true
filter_optional_onedrive:
  Image|contains: \AppData\Local\Microsoft\OneDrive\
  Image|startswith: C:\Users\
selection:
  ImageLoaded|endswith: \vcruntime140.dll
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unknown

## References
- https://www.mandiant.com/resources/blog/apt29-wineloader-german-political-parties
- https://www.zscaler.com/blogs/security-research/european-diplomats-targeted-spikedwine-wineloader
- https://www.nextron-systems.com/2023/09/15/detecting-janelarat-with-yara-and-thor/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-01-12
- **Rule ID:** `d7a63acb-1284-49bc-bfea-7771146c8b1c`
- **Source file:** `windows/image_load/image_load_side_load_vcruntime140.yml`

---
type: detection_rule
title: "Fax Service DLL Search Order Hijack"
rule_id: 828af599-4c53-4ed2-ba4a-a9f835c434ea
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Fax Service DLL Search Order Hijack

## Description
The Fax service attempts to load ualapi.dll, which is non-existent. An attacker can then (side)load their own malicious DLL using this service.

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ImageLoaded|startswith: C:\Windows\WinSxS\
selection:
  ImageLoaded|endswith: ualapi.dll
  Image|endswith: \fxssvc.exe
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Unlikely

## References
- https://windows-internals.com/faxing-your-way-to-system/

## Metadata
- **Author:** NVISO
- **Date:** 2020-05-04
- **Rule ID:** `828af599-4c53-4ed2-ba4a-a9f835c434ea`
- **Source file:** `windows/image_load/image_load_side_load_ualapi.yml`

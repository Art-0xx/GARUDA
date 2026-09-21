---
type: detection_rule
title: "Unsigned Image Loaded Into LSASS Process"
rule_id: 857c8db3-c89b-42fb-882b-f681c7cf4da2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# Unsigned Image Loaded Into LSASS Process

## Description
Loading unsigned image (DLL, EXE) into LSASS process

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \lsass.exe
  Signed: 'false'
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Valid user connecting using RDP

## References
- https://www.slideshare.net/heirhabarov/hunting-for-credentials-dumping-in-windows-environment

## Metadata
- **Author:** Teymur Kheirkhabarov, oscd.community
- **Date:** 2019-10-22
- **Rule ID:** `857c8db3-c89b-42fb-882b-f681c7cf4da2`
- **Source file:** `windows/image_load/image_load_lsass_unsigned_image_load.yml`

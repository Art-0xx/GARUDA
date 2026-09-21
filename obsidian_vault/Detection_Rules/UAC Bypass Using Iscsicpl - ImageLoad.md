---
type: detection_rule
title: "UAC Bypass Using Iscsicpl - ImageLoad"
rule_id: 9ed5959a-c43c-4c59-84e3-d28628429456
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# UAC Bypass Using Iscsicpl - ImageLoad

## Description
Detects the "iscsicpl.exe" UAC bypass technique that leverages a DLL Search Order hijacking technique to load a custom DLL's from temp or a any user controlled location in the users %PATH%

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ImageLoaded|contains|all:
  - C:\Windows\
  - iscsiexe.dll
selection:
  Image: C:\Windows\SysWOW64\iscsicpl.exe
  ImageLoaded|endswith: \iscsiexe.dll
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hackerhouse-opensource/iscsicpl_bypassUAC
- https://twitter.com/wdormann/status/1547583317410607110

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-17
- **Rule ID:** `9ed5959a-c43c-4c59-84e3-d28628429456`
- **Source file:** `windows/image_load/image_load_uac_bypass_iscsicpl.yml`

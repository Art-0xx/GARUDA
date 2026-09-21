---
type: detection_rule
title: "UAC Bypass With Fake DLL"
rule_id: a5ea83a7-05a5-44c1-be2e-addccbbd8c03
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002, attack.t1574.001]
---

# UAC Bypass With Fake DLL

## Description
Attempts to load dismcore.dll after dropping it

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ImageLoaded: C:\Windows\System32\Dism\dismcore.dll
selection:
  ImageLoaded|endswith: \dismcore.dll
  Image|endswith: \dism.exe
```

## MITRE ATT&CK
- T1548.002
- T1574.001

## False Positives
- Actions of a legitimate telnet client

## References
- https://steemit.com/utopian-io/@ah101/uac-bypassing-utility

## Metadata
- **Author:** oscd.community, Dmitry Uchakin
- **Date:** 2020-10-06
- **Rule ID:** `a5ea83a7-05a5-44c1-be2e-addccbbd8c03`
- **Source file:** `windows/image_load/image_load_uac_bypass_via_dism.yml`

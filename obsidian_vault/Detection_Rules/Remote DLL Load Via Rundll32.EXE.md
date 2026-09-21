---
type: detection_rule
title: "Remote DLL Load Via Rundll32.EXE"
rule_id: f40017b3-cb2e-4335-ab5d-3babf679c1de
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1204.002]
---

# Remote DLL Load Via Rundll32.EXE

## Description
Detects a remote DLL load event via "rundll32.exe".

## Log Source
```yaml
category: image_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ImageLoaded|startswith: \\\\
  Image|endswith: \rundll32.exe
```

## MITRE ATT&CK
- T1204.002

## False Positives
- Unknown

## References
- https://github.com/gabe-k/themebleed
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-18
- **Rule ID:** `f40017b3-cb2e-4335-ab5d-3babf679c1de`
- **Source file:** `windows/image_load/image_load_rundll32_remote_share_load.yml`

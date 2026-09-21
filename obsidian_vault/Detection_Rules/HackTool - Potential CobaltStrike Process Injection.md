---
type: detection_rule
title: "HackTool - Potential CobaltStrike Process Injection"
rule_id: 6309645e-122d-4c5b-bb2b-22e4f9c2fa42
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.001]
---

# HackTool - Potential CobaltStrike Process Injection

## Description
Detects a potential remote threat creation with certain characteristics which are typical for Cobalt Strike beacons

## Log Source
```yaml
category: create_remote_thread
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  StartAddress|endswith:
  - 0B80
  - 0C7C
  - 0C88
```

## MITRE ATT&CK
- T1055.001

## False Positives
- Unknown

## References
- https://medium.com/@olafhartong/cobalt-strike-remote-threads-detection-206372d11d0f
- https://blog.cobaltstrike.com/2018/04/09/cobalt-strike-3-11-the-snake-that-eats-its-tail/

## Metadata
- **Author:** Olaf Hartong, Florian Roth (Nextron Systems), Aleksey Potapov, oscd.community
- **Date:** 2018-11-30
- **Rule ID:** `6309645e-122d-4c5b-bb2b-22e4f9c2fa42`
- **Source file:** `windows/create_remote_thread/create_remote_thread_win_hktl_cobaltstrike.yml`

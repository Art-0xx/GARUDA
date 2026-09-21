---
type: detection_rule
title: "Code Injection by ld.so Preload"
rule_id: 7e3c4651-c347-40c4-b1d4-d48590fdf684
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1574.006]
---

# Code Injection by ld.so Preload

## Description
Detects the ld.so preload persistence file. See `man ld.so` for more information.

## Log Source
```yaml
product: linux
```

## Detection Logic
```yaml
condition: keywords
keywords:
- /etc/ld.so.preload
```

## MITRE ATT&CK
- T1574.006

## False Positives
- Rare temporary workaround for library misconfiguration

## References
- https://man7.org/linux/man-pages/man8/ld.so.8.html

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-05-05
- **Rule ID:** `7e3c4651-c347-40c4-b1d4-d48590fdf684`
- **Source file:** `linux/builtin/lnx_ldso_preload_injection.yml`

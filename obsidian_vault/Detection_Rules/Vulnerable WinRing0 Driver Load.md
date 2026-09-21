---
type: detection_rule
title: "Vulnerable WinRing0 Driver Load"
rule_id: 1a42dfa6-6cb2-4df9-9b48-295be477e835
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1543.003]
---

# Vulnerable WinRing0 Driver Load

## Description
Detects the load of a signed WinRing0 driver often used by threat actors, crypto miners (XMRIG) or malware for privilege escalation

## Log Source
```yaml
category: driver_load
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Hashes|contains: IMPHASH=D41FA95D4642DC981F10DE36F4DC8CD7
- ImageLoaded|endswith:
  - \WinRing0x64.sys
  - \WinRing0.sys
  - \WinRing0.dll
  - \WinRing0x64.dll
  - \winring00x64.sys
```

## MITRE ATT&CK
- T1543.003

## False Positives
- Unknown

## References
- https://github.com/xmrig/xmrig/tree/master/bin/WinRing0
- https://www.rapid7.com/blog/post/2021/12/13/driver-based-attacks-past-and-present/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-07-26
- **Rule ID:** `1a42dfa6-6cb2-4df9-9b48-295be477e835`
- **Source file:** `windows/driver_load/driver_load_win_vuln_winring0_driver.yml`

---
type: detection_rule
title: "Crypto Miner User Agent"
rule_id: fa935401-513b-467b-81f4-f9e77aa0dd78
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001]
---

# Crypto Miner User Agent

## Description
Detects suspicious user agent strings used by crypto miners in proxy logs

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-useragent|startswith:
  - 'XMRig '
  - ccminer
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Unknown

## References
- https://github.com/xmrig/xmrig/blob/da22b3e6c45825f3ac1f208255126cb8585cd4fc/src/base/kernel/Platform_win.cpp#L65
- https://github.com/xmrig/xmrig/blob/427b6516e0550200c17ca28675118f0fffcc323f/src/version.h

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-10-21
- **Rule ID:** `fa935401-513b-467b-81f4-f9e77aa0dd78`
- **Source file:** `web/proxy_generic/proxy_ua_cryptominer.yml`

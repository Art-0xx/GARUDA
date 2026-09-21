---
type: detection_rule
title: "Bitsadmin to Uncommon IP Server Address"
rule_id: 8ccd35a2-1c7c-468b-b568-ac6cdf80eec3
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001, attack.t1197]
---

# Bitsadmin to Uncommon IP Server Address

## Description
Detects Bitsadmin connections to IP addresses instead of FQDN names

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-useragent|startswith: Microsoft BITS/
  cs-host|endswith:
  - '1'
  - '2'
  - '3'
  - '4'
  - '5'
  - '6'
  - '7'
  - '8'
  - '9'
```

## MITRE ATT&CK
- T1071.001
- T1197

## False Positives
- Unknown

## References
- https://isc.sans.edu/diary/Microsoft+BITS+Used+to+Download+Payloads/21027

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-06-10
- **Rule ID:** `8ccd35a2-1c7c-468b-b568-ac6cdf80eec3`
- **Source file:** `web/proxy_generic/proxy_ua_bitsadmin_susp_ip.yml`

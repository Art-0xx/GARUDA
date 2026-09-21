---
type: detection_rule
title: "Suspicious Base64 Encoded User-Agent"
rule_id: d443095b-a221-4957-a2c4-cd1756c9b747
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001]
---

# Suspicious Base64 Encoded User-Agent

## Description
Detects suspicious encoded User-Agent strings, as seen used by some malware.

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-useragent|startswith:
  - Q2hyb21l
  - QXBwbGVXZWJLaX
  - RGFsdmlr
  - TW96aWxsY
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Unknown

## References
- https://deviceatlas.com/blog/list-of-user-agent-strings#desktop

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-04
- **Rule ID:** `d443095b-a221-4957-a2c4-cd1756c9b747`
- **Source file:** `web/proxy_generic/proxy_ua_base64_encoded.yml`

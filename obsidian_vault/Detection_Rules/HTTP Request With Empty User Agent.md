---
type: detection_rule
title: "HTTP Request With Empty User Agent"
rule_id: 21e44d78-95e7-421b-a464-ffd8395659c4
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001]
---

# HTTP Request With Empty User Agent

## Description
Detects a potentially suspicious empty user agent strings in proxy log.
Could potentially indicate an uncommon request method.

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-useragent: ''
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Unknown

## References
- https://twitter.com/Carlos_Perez/status/883455096645931008

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-07-08
- **Rule ID:** `21e44d78-95e7-421b-a464-ffd8395659c4`
- **Source file:** `web/proxy_generic/proxy_ua_empty.yml`

---
type: detection_rule
title: "Bitsadmin to Uncommon TLD"
rule_id: 9eb68894-7476-4cd6-8752-23b51f5883a7
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001, attack.t1197]
---

# Bitsadmin to Uncommon TLD

## Description
Detects Bitsadmin connections to domains with uncommon TLDs

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection and not falsepositives
falsepositives:
  cs-host|endswith:
  - .com
  - .net
  - .org
  - .scdn.co
  - .sfx.ms
selection:
  c-useragent|startswith: Microsoft BITS/
```

## MITRE ATT&CK
- T1071.001
- T1197

## False Positives
- Rare programs that use Bitsadmin and update from regional TLDs e.g. .uk or .ca

## References
- https://twitter.com/jhencinski/status/1102695118455349248
- https://isc.sans.edu/forums/diary/Investigating+Microsoft+BITS+Activity/23281/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Tim Shelton
- **Date:** 2019-03-07
- **Rule ID:** `9eb68894-7476-4cd6-8752-23b51f5883a7`
- **Source file:** `web/proxy_generic/proxy_ua_bitsadmin_susp_tld.yml`

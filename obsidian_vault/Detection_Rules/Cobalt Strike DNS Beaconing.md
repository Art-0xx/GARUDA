---
type: detection_rule
title: "Cobalt Strike DNS Beaconing"
rule_id: 2975af79-28c4-4d2f-a951-9095f229df29
platform: network
level: critical
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1071.004]
---

# Cobalt Strike DNS Beaconing

## Description
Detects suspicious DNS queries known from Cobalt Strike beacons

## Log Source
```yaml
category: dns
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  query|startswith:
  - aaa.stage.
  - post.1
selection2:
  query|contains: .stage.123456.
```

## MITRE ATT&CK
- T1071.004

## False Positives
- Unknown

## References
- https://www.icebrg.io/blog/footprints-of-fin7-tracking-actor-patterns
- https://www.sekoia.io/en/hunting-and-detecting-cobalt-strike/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-05-10
- **Rule ID:** `2975af79-28c4-4d2f-a951-9095f229df29`
- **Source file:** `network/dns/net_dns_mal_cobaltstrike.yml`

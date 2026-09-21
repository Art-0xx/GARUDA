---
type: detection_rule
title: "Suspicious Cobalt Strike DNS Beaconing - Sysmon"
rule_id: f356a9c4-effd-4608-bbf8-408afd5cd006
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.004]
---

# Suspicious Cobalt Strike DNS Beaconing - Sysmon

## Description
Detects a program that invoked suspicious DNS queries known from Cobalt Strike beacons

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection*
selection1:
  QueryName|startswith:
  - aaa.stage.
  - post.1
selection2:
  QueryName|contains: .stage.123456.
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
- **Date:** 2021-11-09
- **Rule ID:** `f356a9c4-effd-4608-bbf8-408afd5cd006`
- **Source file:** `windows/dns_query/dns_query_win_mal_cobaltstrike.yml`

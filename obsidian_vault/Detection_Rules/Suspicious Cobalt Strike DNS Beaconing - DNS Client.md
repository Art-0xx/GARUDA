---
type: detection_rule
title: "Suspicious Cobalt Strike DNS Beaconing - DNS Client"
rule_id: 0d18728b-f5bf-4381-9dcf-915539fff6c2
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1071.004]
---

# Suspicious Cobalt Strike DNS Beaconing - DNS Client

## Description
Detects a program that invoked suspicious DNS queries known from Cobalt Strike beacons

## Log Source
```yaml
definition: 'Requirements: Microsoft-Windows-DNS Client Events/Operational Event Log
  must be enabled/collected in order to receive the events.'
product: windows
service: dns-client
```

## Detection Logic
```yaml
condition: selection_eid and 1 of selection_query_*
selection_eid:
  EventID: 3008
selection_query_1:
  QueryName|startswith:
  - aaa.stage.
  - post.1
selection_query_2:
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
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-16
- **Rule ID:** `0d18728b-f5bf-4381-9dcf-915539fff6c2`
- **Source file:** `windows/builtin/dns_client/win_dns_client_mal_cobaltstrike.yml`

---
type: detection_rule
title: "Suspicious DNS Query with B64 Encoded String"
rule_id: 4153a907-2451-4e4f-a578-c52bb6881432
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1048.003, attack.t1071.004]
---

# Suspicious DNS Query with B64 Encoded String

## Description
Detects suspicious DNS queries using base64 encoding

## Log Source
```yaml
category: dns
```

## Detection Logic
```yaml
condition: selection
selection:
  query|contains: ==.
```

## MITRE ATT&CK
- T1048.003
- T1071.004

## False Positives
- Unknown

## References
- https://github.com/krmaxwell/dns-exfiltration

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-05-10
- **Rule ID:** `4153a907-2451-4e4f-a578-c52bb6881432`
- **Source file:** `network/dns/net_dns_susp_b64_queries.yml`

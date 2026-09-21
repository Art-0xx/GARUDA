---
type: detection_rule
title: "DNS Query for Anonfiles.com Domain - Sysmon"
rule_id: 065cceea-77ec-4030-9052-fc0affea7110
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# DNS Query for Anonfiles.com Domain - Sysmon

## Description
Detects DNS queries for "anonfiles.com", which is an anonymous file upload platform often used for malicious purposes

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  QueryName|contains: .anonfiles.com
```

## MITRE ATT&CK
- T1567.002

## False Positives
- Rare legitimate access to anonfiles.com

## References
- https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-blackbyte

## Metadata
- **Author:** pH-T (Nextron Systems)
- **Date:** 2022-07-15
- **Rule ID:** `065cceea-77ec-4030-9052-fc0affea7110`
- **Source file:** `windows/dns_query/dns_query_win_anonymfiles_com.yml`

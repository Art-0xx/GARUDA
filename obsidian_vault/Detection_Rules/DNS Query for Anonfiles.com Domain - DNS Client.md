---
type: detection_rule
title: "DNS Query for Anonfiles.com Domain - DNS Client"
rule_id: 29f171d7-aa47-42c7-9c7b-3c87938164d9
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# DNS Query for Anonfiles.com Domain - DNS Client

## Description
Detects DNS queries for anonfiles.com, which is an anonymous file upload platform often used for malicious purposes

## Log Source
```yaml
definition: 'Requirements: Microsoft-Windows-DNS Client Events/Operational Event Log
  must be enabled/collected in order to receive the events.'
product: windows
service: dns-client
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3008
  QueryName|contains: .anonfiles.com
```

## MITRE ATT&CK
- T1567.002

## False Positives
- Rare legitimate access to anonfiles.com

## References
- https://www.trendmicro.com/vinfo/us/security/news/ransomware-spotlight/ransomware-spotlight-blackbyte

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-16
- **Rule ID:** `29f171d7-aa47-42c7-9c7b-3c87938164d9`
- **Source file:** `windows/builtin/dns_client/win_dns_client_anonymfiles_com.yml`

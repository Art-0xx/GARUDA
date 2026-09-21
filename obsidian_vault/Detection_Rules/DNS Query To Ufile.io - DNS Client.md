---
type: detection_rule
title: "DNS Query To Ufile.io - DNS Client"
rule_id: 090ffaad-c01a-4879-850c-6d57da98452d
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# DNS Query To Ufile.io - DNS Client

## Description
Detects DNS queries to "ufile.io", which was seen abused by malware and threat actors as a method for data exfiltration

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
  QueryName|contains: ufile.io
```

## MITRE ATT&CK
- T1567.002

## False Positives
- DNS queries for "ufile" are not malicious by nature necessarily. Investigate the source to determine the necessary actions to take

## References
- https://thedfirreport.com/2021/12/13/diavol-ransomware/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-01-16
- **Rule ID:** `090ffaad-c01a-4879-850c-6d57da98452d`
- **Source file:** `windows/builtin/dns_client/win_dns_client_ufile_io.yml`

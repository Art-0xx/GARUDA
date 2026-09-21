---
type: detection_rule
title: "DNS Query To Ufile.io"
rule_id: 1cbbeaaf-3c8c-4e4c-9d72-49485b6a176b
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1567.002]
---

# DNS Query To Ufile.io

## Description
Detects DNS queries to "ufile.io", which was seen abused by malware and threat actors as a method for data exfiltration

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  QueryName|contains: ufile.io
```

## MITRE ATT&CK
- T1567.002

## False Positives
- DNS queries for "ufile" are not malicious by nature necessarily. Investigate the source to determine the necessary actions to take

## References
- https://thedfirreport.com/2021/12/13/diavol-ransomware/

## Metadata
- **Author:** yatinwad, TheDFIRReport
- **Date:** 2022-06-23
- **Rule ID:** `1cbbeaaf-3c8c-4e4c-9d72-49485b6a176b`
- **Source file:** `windows/dns_query/dns_query_win_ufile_io_query.yml`

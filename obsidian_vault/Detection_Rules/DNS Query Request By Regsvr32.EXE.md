---
type: detection_rule
title: "DNS Query Request By Regsvr32.EXE"
rule_id: 36e037c4-c228-4866-b6a3-48eb292b9955
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1559.001, attack.t1218.010]
---

# DNS Query Request By Regsvr32.EXE

## Description
Detects DNS queries initiated by "Regsvr32.exe"

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: \regsvr32.exe
```

## MITRE ATT&CK
- T1559.001
- T1218.010

## False Positives
- Unknown

## References
- https://pentestlab.blog/2017/05/11/applocker-bypass-regsvr32/
- https://oddvar.moe/2017/12/13/applocker-case-study-how-insecure-is-it-really-part-1/

## Metadata
- **Author:** Dmitriy Lifanov, oscd.community
- **Date:** 2019-10-25
- **Rule ID:** `36e037c4-c228-4866-b6a3-48eb292b9955`
- **Source file:** `windows/dns_query/dns_query_win_regsvr32_dns_query.yml`

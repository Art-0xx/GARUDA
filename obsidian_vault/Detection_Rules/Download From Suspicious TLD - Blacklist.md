---
type: detection_rule
title: "Download From Suspicious TLD - Blacklist"
rule_id: 00d0b5ab-1f55-4120-8e83-487c0a7baf19
platform: web
level: low
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1566, attack.t1203, attack.t1204.002]
---

# Download From Suspicious TLD - Blacklist

## Description
Detects download of certain file types from hosts in suspicious TLDs

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-uri-extension:
  - exe
  - vbs
  - bat
  - rar
  - ps1
  - doc
  - docm
  - xls
  - xlsm
  - pptm
  - rtf
  - hta
  - dll
  - ws
  - wsf
  - sct
  - zip
  cs-host|endswith:
  - .country
  - .stream
  - .gdn
  - .mom
  - .xin
  - .kim
  - .men
  - .loan
  - .download
  - .racing
  - .online
  - .science
  - .ren
  - .gb
  - .win
  - .top
  - .review
  - .vip
  - .party
  - .tech
  - .xyz
  - .date
  - .faith
  - .zip
  - .cricket
  - .space
  - .info
  - .vn
  - .cm
  - .am
  - .cc
  - .asia
  - .ws
  - .tk
  - .biz
  - .su
  - .st
  - .ro
  - .ge
  - .ms
  - .pk
  - .nu
  - .me
  - .ph
  - .to
  - .tt
  - .name
  - .tv
  - .kz
  - .tc
  - .mobi
  - .study
  - .click
  - .link
  - .trade
  - .accountant
  - .cf
  - .gq
  - .ml
  - .ga
  - .pw
```

## MITRE ATT&CK
- T1566
- T1203
- T1204.002

## False Positives
- All kinds of software downloads

## References
- https://www.symantec.com/connect/blogs/shady-tld-research-gdn-and-our-2016-wrap
- https://promos.mcafee.com/en-US/PDF/MTMW_Report.pdf
- https://www.spamhaus.org/statistics/tlds/
- https://krebsonsecurity.com/2018/06/bad-men-at-work-please-dont-click/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-11-07
- **Rule ID:** `00d0b5ab-1f55-4120-8e83-487c0a7baf19`
- **Source file:** `web/proxy_generic/proxy_download_susp_tlds_blacklist.yml`

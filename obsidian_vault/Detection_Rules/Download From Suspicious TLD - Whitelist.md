---
type: detection_rule
title: "Download From Suspicious TLD - Whitelist"
rule_id: b5de2919-b74a-4805-91a7-5049accbaefe
platform: web
level: low
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1566, attack.t1203, attack.t1204.002]
---

# Download From Suspicious TLD - Whitelist

## Description
Detects executable downloads from suspicious remote systems

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  cs-host|endswith:
  - .com
  - .org
  - .net
  - .edu
  - .gov
  - .uk
  - .ca
  - .de
  - .jp
  - .fr
  - .au
  - .us
  - .ch
  - .it
  - .nl
  - .se
  - .no
  - .es
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
```

## MITRE ATT&CK
- T1566
- T1203
- T1204.002

## False Positives
- All kind of software downloads

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-03-13
- **Rule ID:** `b5de2919-b74a-4805-91a7-5049accbaefe`
- **Source file:** `web/proxy_generic/proxy_download_susp_tlds_whitelist.yml`

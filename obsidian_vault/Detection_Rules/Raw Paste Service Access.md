---
type: detection_rule
title: "Raw Paste Service Access"
rule_id: 5468045b-4fcc-4d1a-973c-c9c9578edacb
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001, attack.t1102.001, attack.t1102.003]
---

# Raw Paste Service Access

## Description
Detects direct access to raw pastes in different paste services often used by malware in their second stages to download malicious code in encrypted or encoded form

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-uri|contains:
  - .paste.ee/r/
  - .pastebin.com/raw/
  - .hastebin.com/raw/
  - .ghostbin.co/paste/*/raw/
  - pastetext.net/
  - pastebin.pl/
  - paste.ee/
```

## MITRE ATT&CK
- T1071.001
- T1102.001
- T1102.003

## False Positives
- User activity (e.g. developer that shared and copied code snippets and used the raw link instead of just copy & paste)

## References
- https://www.virustotal.com/gui/domain/paste.ee/relations

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-12-05
- **Rule ID:** `5468045b-4fcc-4d1a-973c-c9c9578edacb`
- **Source file:** `web/proxy_generic/proxy_raw_paste_service_access.yml`

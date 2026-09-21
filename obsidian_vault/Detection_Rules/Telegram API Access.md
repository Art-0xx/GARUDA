---
type: detection_rule
title: "Telegram API Access"
rule_id: b494b165-6634-483d-8c47-2026a6c52372
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001, attack.t1102.002]
---

# Telegram API Access

## Description
Detects suspicious requests to Telegram API without the usual Telegram User-Agent

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  c-useragent|contains:
  - Telegram
  - Bot
selection:
  cs-host: api.telegram.org
```

## MITRE ATT&CK
- T1071.001
- T1102.002

## False Positives
- Legitimate use of Telegram bots in the company

## References
- https://researchcenter.paloaltonetworks.com/2018/03/unit42-telerat-another-android-trojan-leveraging-telegrams-bot-api-to-target-iranian-users/
- https://blog.malwarebytes.com/threat-analysis/2016/11/telecrypt-the-ransomware-abusing-telegram-api-defeated/
- https://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-06-05
- **Rule ID:** `b494b165-6634-483d-8c47-2026a6c52372`
- **Source file:** `web/proxy_generic/proxy_telegram_api.yml`

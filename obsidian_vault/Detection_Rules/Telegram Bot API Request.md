---
type: detection_rule
title: "Telegram Bot API Request"
rule_id: c64c5175-5189-431b-a55e-6d9882158251
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1102.002]
---

# Telegram Bot API Request

## Description
Detects suspicious DNS queries to api.telegram.org used by Telegram Bots of any kind

## Log Source
```yaml
category: dns
```

## Detection Logic
```yaml
condition: selection
selection:
  query: api.telegram.org
```

## MITRE ATT&CK
- T1102.002

## False Positives
- Legitimate use of Telegram bots in the company

## References
- https://core.telegram.org/bots/faq
- https://researchcenter.paloaltonetworks.com/2018/03/unit42-telerat-another-android-trojan-leveraging-telegrams-bot-api-to-target-iranian-users/
- https://blog.malwarebytes.com/threat-analysis/2016/11/telecrypt-the-ransomware-abusing-telegram-api-defeated/
- https://www.welivesecurity.com/2016/12/13/rise-telebots-analyzing-disruptive-killdisk-attacks/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-06-05
- **Rule ID:** `c64c5175-5189-431b-a55e-6d9882158251`
- **Source file:** `network/dns/net_dns_susp_telegram_api.yml`

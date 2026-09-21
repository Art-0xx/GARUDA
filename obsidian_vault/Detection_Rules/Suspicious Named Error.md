---
type: detection_rule
title: "Suspicious Named Error"
rule_id: c8e35e96-19ce-4f16-aeb6-fd5588dc5365
platform: linux
level: high
status: test
tags: [detection, sigma, linux]
mitre_tags: [attack.t1190]
---

# Suspicious Named Error

## Description
Detects suspicious DNS error messages that indicate a fatal or suspicious error that could be caused by exploiting attempts

## Log Source
```yaml
product: linux
service: syslog
```

## Detection Logic
```yaml
condition: keywords
keywords:
- ' dropping source port zero packet from '
- ' denied AXFR from '
- ' exiting (due to fatal error)'
```

## MITRE ATT&CK
- T1190

## False Positives
- Unknown

## References
- https://github.com/ossec/ossec-hids/blob/1ecffb1b884607cb12e619f9ab3c04f530801083/etc/rules/named_rules.xml

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2018-02-20
- **Rule ID:** `c8e35e96-19ce-4f16-aeb6-fd5588dc5365`
- **Source file:** `linux/builtin/syslog/lnx_syslog_susp_named.yml`

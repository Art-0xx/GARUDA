---
type: detection_rule
title: "Suspicious User Agent"
rule_id: 7195a772-4b3f-43a4-a210-6a003d65caa1
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1071.001]
---

# Suspicious User Agent

## Description
Detects suspicious malformed user agent strings in proxy logs

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: 1 of selection* and not falsepositives
falsepositives:
- c-useragent: Mozilla/3.0 * Acrobat *
- cs-host|endswith:
  - .acrobat.com
  - .adobe.com
  - .adobe.io
selection1:
  c-useragent|startswith:
  - user-agent
  - 'Mozilla/3.0 '
  - 'Mozilla/2.0 '
  - 'Mozilla/1.0 '
  - 'Mozilla '
  - ' Mozilla/'
  - Mozila/
  - Mozilla/4.0 (compatible; MSIE 6.0; MS Web Services Client Protocol
selection2:
  c-useragent|contains:
  - ' (compatible;MSIE '
  - '.0;Windows NT '
  - loader
selection3:
  c-useragent:
  - _
  - CertUtil URL Agent
  - Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:60.0)
  - Mozilla/5.0 (Windows NT 6.3; WOW64; rv:28.0) Gecko/20100101 Firefox/28.0
  - HTTPS
  - Erbium-UA-4ce7c27cb4be9d32e333bf032c88235a
  - x
  - xxx
```

## MITRE ATT&CK
- T1071.001

## False Positives
- Unknown

## References
- https://github.com/fastly/waf_testbed/blob/8bfc406551f3045e418cbaad7596cff8da331dfc/templates/default/scanners-user-agents.data.erb

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-07-08
- **Rule ID:** `7195a772-4b3f-43a4-a210-6a003d65caa1`
- **Source file:** `web/proxy_generic/proxy_ua_susp.yml`

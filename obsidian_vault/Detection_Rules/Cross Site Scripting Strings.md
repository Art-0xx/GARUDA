---
type: detection_rule
title: "Cross Site Scripting Strings"
rule_id: 65354b83-a2ea-4ea6-8414-3ab38be0d409
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1189]
---

# Cross Site Scripting Strings

## Description
Detects XSS attempts injected via GET requests in access logs

## Log Source
```yaml
category: webserver
```

## Detection Logic
```yaml
condition: select_method and keywords and not filter
filter:
  sc-status: 404
keywords:
- =<script>
- =%3Cscript%3E
- =%253Cscript%253E
- '<iframe '
- '%3Ciframe '
- '<svg '
- '%3Csvg '
- document.cookie
- document.domain
- ' onerror='
- ' onresize='
- ' onload="'
- onmouseover=
- ${alert
- javascript:alert
- javascript%3Aalert
select_method:
  cs-method: GET
```

## MITRE ATT&CK
- T1189

## False Positives
- JavaScripts,CSS Files and PNG files
- User searches in search boxes of the respective website
- Internal vulnerability scanners can cause some serious FPs when used, if you experience a lot of FPs due to this think of adding more filters such as "User Agent" strings and more response codes

## References
- https://github.com/payloadbox/xss-payload-list
- https://portswigger.net/web-security/cross-site-scripting/contexts

## Metadata
- **Author:** Saw Win Naung, Nasreddine Bencherchali
- **Date:** 2021-08-15
- **Rule ID:** `65354b83-a2ea-4ea6-8414-3ab38be0d409`
- **Source file:** `web/webserver_generic/web_xss_in_access_logs.yml`

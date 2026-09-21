---
type: detection_rule
title: "Windows Webshell Strings"
rule_id: 7ff9db12-1b94-4a79-ba68-a2402c5d6729
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1505.003]
---

# Windows Webshell Strings

## Description
Detects common commands used in Windows webshells

## Log Source
```yaml
category: webserver
```

## Detection Logic
```yaml
condition: all of selection_*
selection_keywords:
- =whoami
- =net%20user
- =net+user
- =net%2Buser
- =cmd%20/c%
- =cmd+/c+
- =cmd%2B/c%
- =cmd%20/r%
- =cmd+/r+
- =cmd%2B/r%
- =cmd%20/k%
- =cmd+/k+
- =cmd%2B/k%
- =powershell%
- =powershell+
- =tasklist%
- =tasklist+
- =wmic%
- =wmic+
- =ssh%
- =ssh+
- =python%
- =python+
- =python3%
- =python3+
- =ipconfig
- =wget%
- =wget+
- =curl%
- =curl+
- =certutil
- =copy%20%5C%5C
- =dsquery%
- =dsquery+
- =nltest%
- =nltest+
selection_method:
  cs-method: GET
```

## MITRE ATT&CK
- T1505.003

## False Positives
- Web sites like wikis with articles on os commands and pages that include the os commands in the URLs
- User searches in search boxes of the respective website

## References
- https://bad-jubies.github.io/RCE-NOW-WHAT/
- https://m365internals.com/2022/10/07/hunting-in-on-premises-exchange-server-logs/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2017-02-19
- **Rule ID:** `7ff9db12-1b94-4a79-ba68-a2402c5d6729`
- **Source file:** `web/webserver_generic/web_win_webshells_in_access_logs.yml`

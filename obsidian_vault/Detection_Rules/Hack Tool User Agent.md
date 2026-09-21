---
type: detection_rule
title: "Hack Tool User Agent"
rule_id: c42a3073-30fb-48ae-8c99-c23ada84b103
platform: web
level: high
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1190, attack.t1110]
---

# Hack Tool User Agent

## Description
Detects suspicious user agent strings user by hack tools in proxy logs

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-useragent|contains:
  - (hydra)
  - ' arachni/'
  - ' BFAC '
  - ' brutus '
  - ' cgichk '
  - core-project/1.0
  - ' crimscanner/'
  - datacha0s
  - dirbuster
  - domino hunter
  - dotdotpwn
  - FHScan Core
  - floodgate
  - get-minimal
  - gootkit auto-rooter scanner
  - grendel-scan
  - ' inspath '
  - internet ninja
  - jaascois
  - ' zmeu '
  - masscan
  - ' metis '
  - morfeus fucking scanner
  - n-stealth
  - nsauditor
  - pmafind
  - security scan
  - springenwerk
  - teh forest lobster
  - toata dragostea
  - ' vega/'
  - voideye
  - webshag
  - webvulnscan
  - ' whcc/'
  - ' Havij'
  - absinthe
  - bsqlbf
  - mysqloit
  - pangolin
  - sql power injector
  - sqlmap
  - sqlninja
  - uil2pn
  - ruler
  - Mozilla/5.0 (Windows; U; Windows NT 5.1; pt-PT; rv:1.9.1.2) Gecko/20090729 Firefox/3.5.2
    (.NET CLR 3.5.30729)
```

## MITRE ATT&CK
- T1190
- T1110

## False Positives
- Unknown

## References
- https://github.com/fastly/waf_testbed/blob/8bfc406551f3045e418cbaad7596cff8da331dfc/templates/default/scanners-user-agents.data.erb
- http://rules.emergingthreats.net/open/snort-2.9.0/rules/emerging-user_agents.rules

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-07-08
- **Rule ID:** `c42a3073-30fb-48ae-8c99-c23ada84b103`
- **Source file:** `web/proxy_generic/proxy_ua_hacktool.yml`

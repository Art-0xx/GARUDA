---
type: detection_rule
title: "Suspicious DNS Query for IP Lookup Service APIs"
rule_id: ec82e2a5-81ea-4211-a1f8-37a0286df2c2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1590]
---

# Suspicious DNS Query for IP Lookup Service APIs

## Description
Detects DNS queries for IP lookup services such as "api.ipify.org" originating from a non browser process.

## Log Source
```yaml
category: dns_query
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_brave:
  Image|endswith: \brave.exe
filter_optional_chrome:
  Image:
  - C:\Program Files\Google\Chrome\Application\chrome.exe
  - C:\Program Files (x86)\Google\Chrome\Application\chrome.exe
filter_optional_edge_1:
- Image|startswith: C:\Program Files (x86)\Microsoft\EdgeWebView\Application\
- Image|endswith: \WindowsApps\MicrosoftEdge.exe
- Image:
  - C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe
  - C:\Program Files\Microsoft\Edge\Application\msedge.exe
filter_optional_edge_2:
  Image|endswith:
  - \msedge.exe
  - \msedgewebview2.exe
  Image|startswith:
  - C:\Program Files (x86)\Microsoft\EdgeCore\
  - C:\Program Files\Microsoft\EdgeCore\
filter_optional_firefox:
  Image:
  - C:\Program Files\Mozilla Firefox\firefox.exe
  - C:\Program Files (x86)\Mozilla Firefox\firefox.exe
filter_optional_ie:
  Image:
  - C:\Program Files (x86)\Internet Explorer\iexplore.exe
  - C:\Program Files\Internet Explorer\iexplore.exe
filter_optional_maxthon:
  Image|endswith: \maxthon.exe
filter_optional_opera:
  Image|endswith: \opera.exe
filter_optional_safari:
  Image|endswith: \safari.exe
filter_optional_seamonkey:
  Image|endswith: \seamonkey.exe
filter_optional_vivaldi:
  Image|endswith: \vivaldi.exe
filter_optional_whale:
  Image|endswith: \whale.exe
selection:
- QueryName:
  - www.ip.cn
  - l2.io
- QueryName|contains:
  - api.2ip.ua
  - api.bigdatacloud.net
  - api.ipify.org
  - bot.whatismyipaddress.com
  - canireachthe.net
  - checkip.amazonaws.com
  - checkip.dyndns.org
  - curlmyip.com
  - db-ip.com
  - edns.ip-api.com
  - eth0.me
  - freegeoip.app
  - geoipy.com
  - getip.pro
  - icanhazip.com
  - ident.me
  - ifconfig.io
  - ifconfig.me
  - ip-api.com
  - ip.360.cn
  - ip.anysrc.net
  - ip.taobao.com
  - ip.tyk.nu
  - ipaddressworld.com
  - ipapi.co
  - ipconfig.io
  - ipecho.net
  - ipinfo.io
  - ipip.net
  - ipof.in
  - ipv4.icanhazip.com
  - ipv4bot.whatismyipaddress.com
  - ipv6-test.com
  - ipwho.is
  - jsonip.com
  - myexternalip.com
  - seeip.org
  - wgetip.com
  - whatismyip.akamai.com
  - whois.pconline.com.cn
  - wtfismyip.com
```

## MITRE ATT&CK
- T1590

## False Positives
- Legitimate usage of IP lookup services such as ipify API

## References
- https://www.binarydefense.com/analysis-of-hancitor-when-boring-begets-beacon
- https://twitter.com/neonprimetime/status/1436376497980428318
- https://www.trendmicro.com/en_us/research/23/e/managed-xdr-investigation-of-ducktail-in-trend-micro-vision-one.html

## Metadata
- **Author:** Brandon George (blog post), Thomas Patzke
- **Date:** 2021-07-08
- **Rule ID:** `ec82e2a5-81ea-4211-a1f8-37a0286df2c2`
- **Source file:** `windows/dns_query/dns_query_win_susp_external_ip_lookup.yml`

---
type: detection_rule
title: "Suspicious Network Connection to IP Lookup Service APIs"
rule_id: edf3485d-dac4-4d50-90e4-b0e5813f7e60
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1016]
---

# Suspicious Network Connection to IP Lookup Service APIs

## Description
Detects external IP address lookups by non-browser processes via services such as "api.ipify.org". This could be indicative of potential post compromise internet test activity.

## Log Source
```yaml
category: network_connection
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
- DestinationHostname:
  - www.ip.cn
  - l2.io
- DestinationHostname|contains:
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
- T1016

## False Positives
- Legitimate use of the external websites for troubleshooting or network monitoring

## References
- https://github.com/rsp/scripts/blob/c8bb272d68164a9836e4f273d8f924927f39b8c6/externalip-benchmark.md
- https://www.cisa.gov/news-events/cybersecurity-advisories/aa20-302a
- https://thedfirreport.com/2022/11/28/emotet-strikes-again-lnk-file-leads-to-domain-wide-ransomware/
- https://www.trendmicro.com/en_us/research/23/e/managed-xdr-investigation-of-ducktail-in-trend-micro-vision-one.html

## Metadata
- **Author:** Janantha Marasinghe, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-04-24
- **Rule ID:** `edf3485d-dac4-4d50-90e4-b0e5813f7e60`
- **Source file:** `windows/network_connection/net_connection_win_domain_external_ip_lookup.yml`

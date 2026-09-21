---
type: detection_rule
title: "Download from Suspicious Dyndns Hosts"
rule_id: 195c1119-ef07-4909-bb12-e66f5e07bf3c
platform: web
level: medium
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1105, attack.t1568]
---

# Download from Suspicious Dyndns Hosts

## Description
Detects download of certain file types from hosts with dynamic DNS names (selected list)

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  c-uri-extension:
  - exe
  - vbs
  - bat
  - rar
  - ps1
  - doc
  - docm
  - xls
  - xlsm
  - pptm
  - rtf
  - hta
  - dll
  - ws
  - wsf
  - sct
  - zip
  cs-host|endswith:
  - .hopto.org
  - .no-ip.org
  - .no-ip.info
  - .no-ip.biz
  - .no-ip.com
  - .noip.com
  - .ddns.name
  - .myftp.org
  - .myftp.biz
  - .serveblog.net
  - .servebeer.com
  - .servemp3.com
  - .serveftp.com
  - .servequake.com
  - .servehalflife.com
  - .servehttp.com
  - .servegame.com
  - .servepics.com
  - .myvnc.com
  - .ignorelist.com
  - .jkub.com
  - .dlinkddns.com
  - .jumpingcrab.com
  - .ddns.info
  - .mooo.com
  - .dns-dns.com
  - .strangled.net
  - .adultdns.net
  - .craftx.biz
  - .ddns01.com
  - .dns53.biz
  - .dnsapi.info
  - .dnsd.info
  - .dnsdynamic.com
  - .dnsdynamic.net
  - .dnsget.org
  - .fe100.net
  - .flashserv.net
  - .ftp21.net
  - .http01.com
  - .http80.info
  - .https443.com
  - .imap01.com
  - .kadm5.com
  - .mysq1.net
  - .ns360.info
  - .ntdll.net
  - .ole32.com
  - .proxy8080.com
  - .sql01.com
  - .ssh01.com
  - .ssh22.net
  - .tempors.com
  - .tftpd.net
  - .ttl60.com
  - .ttl60.org
  - .user32.com
  - .voip01.com
  - .wow64.net
  - .x64.me
  - .xns01.com
  - .dyndns.org
  - .dyndns.info
  - .dyndns.tv
  - .dyndns-at-home.com
  - .dnsomatic.com
  - .zapto.org
  - .webhop.net
  - .25u.com
  - .slyip.net
```

## MITRE ATT&CK
- T1105
- T1568

## False Positives
- Software downloads

## References
- https://www.alienvault.com/blogs/security-essentials/dynamic-dns-security-and-potential-threats

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2017-11-08
- **Rule ID:** `195c1119-ef07-4909-bb12-e66f5e07bf3c`
- **Source file:** `web/proxy_generic/proxy_download_susp_dyndns.yml`

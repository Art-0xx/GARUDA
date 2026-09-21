---
type: detection_rule
title: "DNS Query to External Service Interaction Domains"
rule_id: aff715fa-4dd5-497a-8db3-910bea555566
platform: network
level: high
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1190, attack.t1595.002]
---

# DNS Query to External Service Interaction Domains

## Description
Detects DNS queries to well-known out-of-band application security testing (OAST) and callback domains.
These services (e.g. Burp Collaborator, interactsh, canarytokens, dnslog.cn) are used by security
researchers and attackers alike to confirm blind vulnerabilities such as SSRF, XXE, blind RCE, and
Log4Shell-style injections, where the exploit payload triggers an external DNS lookup to a controlled domain.

A detection indicates that a host on your network resolved one of these domains, which may mean:
    (1) an attacker is actively probing or exploiting a vulnerable service and using the callback to
    confirm code execution or data exfiltration,
    (2) a security scanner (e.g. Nuclei, Gobies) is running against internal targets.

Investigate the source host, the full DNS query string (the unique subdomain prefix encodes the callback session),
and any concurrent outbound connections or process activity to determine intent.

## Log Source
```yaml
category: dns
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_polling:
  query|contains: polling.oastify.com
selection:
  query|endswith:
  - .burpcollaborator.net
  - .canarytokens.com
  - .ceye.io
  - .ddns.1433.eu.org
  - .ddns.bypass.eu.org
  - .ddns.xn--gg8h.eu.org
  - .digimg.store
  - .dns.su18.org
  - .dnshook.site
  - .dnslog.cn
  - .dnslog.ink
  - .gobygo.net
  - .instances.httpworkbench.com
  - .interact.sh
  - .log.dnslog.pp.ua
  - .log.dnslog.qzz.io
  - .log.dnslogs.dpdns.org
  - .log.javaweb.org
  - .log.nat.cloudns.ph
  - .oast.fun
  - .oast.live
  - .oast.me
  - .oast.online
  - .oast.pro
  - .oast.site
  - .oastify.com
  - .p8.lol
  - .requestbin.net
```

## MITRE ATT&CK
- T1190
- T1595.002

## False Positives
- Legitimate security scanning.

## References
- https://twitter.com/breakersall/status/1533493587828260866
- https://www.bitdefender.com/en-us/blog/businessinsights/bitdefender-advisory-critical-unauthenticated-rce-windows-server-update-services-cve-2025-59287
- https://github.com/SigmaHQ/sigma/pull/5724#issuecomment-3466382234
- https://hunt.io/blog/open-directory-nginx-rift-ghost-cms-multi-cve

## Metadata
- **Author:** Florian Roth (Nextron Systems), Matt Kelly (list of domains)
- **Date:** 2022-06-07
- **Rule ID:** `aff715fa-4dd5-497a-8db3-910bea555566`
- **Source file:** `network/dns/net_dns_external_service_interaction_domains.yml`

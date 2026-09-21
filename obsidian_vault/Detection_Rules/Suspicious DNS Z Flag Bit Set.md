---
type: detection_rule
title: "Suspicious DNS Z Flag Bit Set"
rule_id: ede05abc-2c9e-4624-9944-9ff17fdc0bf5
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1095, attack.t1571]
---

# Suspicious DNS Z Flag Bit Set

## Description
The DNS Z flag is bit within the DNS protocol header that is, per the IETF design, meant to be used reserved (unused).
Although recently it has been used in DNSSec, the value being set to anything other than 0 should be rare.
Otherwise if it is set to non 0 and DNSSec is being used, then excluding the legitimate domains is low effort and high reward.
Determine if multiple of these files were accessed in a short period of time to further enhance the possibility of seeing if this was a one off or the possibility of larger sensitive file gathering.
This Sigma query is designed to accompany the Corelight Threat Hunting Guide, which can be found here: https://www3.corelight.com/corelights-introductory-guide-to-threat-hunting-with-zeek-bro-logs'

## Log Source
```yaml
product: zeek
service: dns
```

## Detection Logic
```yaml
condition: not z_flag_unset and most_probable_valid_domain and not (exclude_tlds or
  exclude_query_types or exclude_responses or exclude_netbios)
exclude_netbios:
  id.resp_p:
  - 137
  - 138
  - 139
exclude_query_types:
  qtype_name:
  - ns
  - mx
exclude_responses:
  answers|endswith: \\x00
exclude_tlds:
  query|endswith:
  - .arpa
  - .local
  - .ultradns.net
  - .twtrdns.net
  - .azuredns-prd.info
  - .azure-dns.com
  - .azuredns-ff.info
  - .azuredns-ff.org
  - .azuregov-dns.org
most_probable_valid_domain:
  query|contains: .
z_flag_unset:
  Z: 0
```

## MITRE ATT&CK
- T1095
- T1571

## False Positives
- Internal or legitimate external domains using DNSSec. Verify if these are legitimate DNSSec domains and then exclude them.
- If you work in a Public Sector then it may be good to exclude things like endswith ".edu", ".gov" and or ".mil"

## References
- https://twitter.com/neu5ron/status/1346245602502443009
- https://tdm.socprime.com/tdm/info/eLbyj4JjI15v#sigma
- https://tools.ietf.org/html/rfc2929#section-2.1
- https://www.netresec.com/?page=Blog&month=2021-01&post=Finding-Targeted-SUNBURST-Victims-with-pDNS

## Metadata
- **Author:** @neu5ron, SOC Prime Team, Corelight
- **Date:** 2021-05-04
- **Rule ID:** `ede05abc-2c9e-4624-9944-9ff17fdc0bf5`
- **Source file:** `network/zeek/zeek_dns_susp_zbit_flag.yml`

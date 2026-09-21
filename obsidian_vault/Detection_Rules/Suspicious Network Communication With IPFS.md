---
type: detection_rule
title: "Suspicious Network Communication With IPFS"
rule_id: eb6c2004-1cef-427f-8885-9042974e5eb6
platform: web
level: low
status: test
tags: [detection, sigma, web]
mitre_tags: [attack.t1056]
---

# Suspicious Network Communication With IPFS

## Description
Detects connections to interplanetary file system (IPFS) containing a user's email address which mirrors behaviours observed in recent phishing campaigns leveraging IPFS to host credential harvesting webpages.

## Log Source
```yaml
category: proxy
```

## Detection Logic
```yaml
condition: selection
selection:
  cs-uri|re: (?i)(ipfs\.io/|ipfs\.io\s).+\..+@.+\.[a-z]+
```

## MITRE ATT&CK
- T1056

## False Positives
- Legitimate use of IPFS being used in the organisation. However the cs-uri regex looking for a user email will likely negate this.

## References
- https://blog.talosintelligence.com/ipfs-abuse/
- https://github.com/Cisco-Talos/IOCs/tree/80caca039988252fbb3f27a2e89c2f2917f582e0/2022/11
- https://isc.sans.edu/diary/IPFS%20phishing%20and%20the%20need%20for%20correctly%20set%20HTTP%20security%20headers/29638

## Metadata
- **Author:** Gavin Knapp
- **Date:** 2023-03-16
- **Rule ID:** `eb6c2004-1cef-427f-8885-9042974e5eb6`
- **Source file:** `web/proxy_generic/proxy_susp_ipfs_cred_harvest.yml`

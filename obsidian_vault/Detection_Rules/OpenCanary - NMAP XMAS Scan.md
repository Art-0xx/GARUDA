---
type: detection_rule
title: "OpenCanary - NMAP XMAS Scan"
rule_id: d7553d7b-f485-479c-b192-cdac6edd83a4
platform: application
level: high
status: experimental
tags: [detection, sigma, application]
mitre_tags: [attack.t1046]
---

# OpenCanary - NMAP XMAS Scan

## Description
Detects instances where an OpenCanary node has been targeted by a NMAP XMAS Scan

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 5004
```

## MITRE ATT&CK
- T1046

## False Positives
- Unlikely

## References
- https://opencanary.readthedocs.io/en/latest/starting/configuration.html#services-configuration
- https://github.com/thinkst/opencanary/blob/a0896adfcaf0328cfd5829fe10d2878c7445138e/opencanary/logger.py#L52

## Metadata
- **Author:** Marco Pedrinazzi (@pedrinazziM)
- **Date:** 2026-01-06
- **Rule ID:** `d7553d7b-f485-479c-b192-cdac6edd83a4`
- **Source file:** `application/opencanary/opencanary_portscan_nmap_xmas_scan.yml`

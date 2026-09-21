---
type: detection_rule
title: "OpenCanary - NMAP NULL Scan"
rule_id: 68b8547b-107f-43f3-97fb-900a7d63c190
platform: application
level: high
status: experimental
tags: [detection, sigma, application]
mitre_tags: [attack.t1046]
---

# OpenCanary - NMAP NULL Scan

## Description
Detects instances where an OpenCanary node has been targeted by a NMAP NULL Scan

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 5003
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
- **Rule ID:** `68b8547b-107f-43f3-97fb-900a7d63c190`
- **Source file:** `application/opencanary/opencanary_portscan_nmap_null_scan.yml`

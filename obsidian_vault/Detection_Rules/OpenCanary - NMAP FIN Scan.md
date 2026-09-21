---
type: detection_rule
title: "OpenCanary - NMAP FIN Scan"
rule_id: eae8c0c8-e5da-450a-9d7d-66aa56cd26b6
platform: application
level: high
status: experimental
tags: [detection, sigma, application]
mitre_tags: [attack.t1046]
---

# OpenCanary - NMAP FIN Scan

## Description
Detects instances where an OpenCanary node has been targeted by a NMAP FIN Scan

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 5005
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
- **Rule ID:** `eae8c0c8-e5da-450a-9d7d-66aa56cd26b6`
- **Source file:** `application/opencanary/opencanary_portscan_nmap_fin_scan.yml`

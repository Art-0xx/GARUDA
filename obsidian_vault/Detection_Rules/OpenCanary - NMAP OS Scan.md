---
type: detection_rule
title: "OpenCanary - NMAP OS Scan"
rule_id: e8a677fd-248c-4eab-94df-de2f6f645884
platform: application
level: high
status: experimental
tags: [detection, sigma, application]
mitre_tags: [attack.t1046]
---

# OpenCanary - NMAP OS Scan

## Description
Detects instances where an OpenCanary node has been targeted by a NMAP OS Scan

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 5002
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
- **Rule ID:** `e8a677fd-248c-4eab-94df-de2f6f645884`
- **Source file:** `application/opencanary/opencanary_portscan_nmap_os_scan.yml`

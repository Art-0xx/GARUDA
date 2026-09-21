---
type: detection_rule
title: "OpenCanary - VNC Connection Attempt"
rule_id: 9db5446c-b44a-4291-8b89-fcab5609c3b3
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1021]
---

# OpenCanary - VNC Connection Attempt

## Description
Detects instances where a VNC service on an OpenCanary node has had a connection attempt.

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 12001
```

## MITRE ATT&CK
- T1021

## False Positives
- Unlikely

## References
- https://opencanary.readthedocs.io/en/latest/starting/configuration.html#services-configuration
- https://github.com/thinkst/opencanary/blob/a0896adfcaf0328cfd5829fe10d2878c7445138e/opencanary/logger.py#L52

## Metadata
- **Author:** Security Onion Solutions
- **Date:** 2024-03-08
- **Rule ID:** `9db5446c-b44a-4291-8b89-fcab5609c3b3`
- **Source file:** `application/opencanary/opencanary_vnc_connection_attempt.yml`

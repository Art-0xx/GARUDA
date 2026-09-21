---
type: detection_rule
title: "OpenCanary - SSH New Connection Attempt"
rule_id: cd55f721-5623-4663-bd9b-5229cab5237d
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1133, attack.t1021, attack.t1078]
---

# OpenCanary - SSH New Connection Attempt

## Description
Detects instances where an SSH service on an OpenCanary node has had a connection attempt.

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 4000
```

## MITRE ATT&CK
- T1133
- T1021
- T1078

## False Positives
- Unlikely

## References
- https://opencanary.readthedocs.io/en/latest/starting/configuration.html#services-configuration
- https://github.com/thinkst/opencanary/blob/a0896adfcaf0328cfd5829fe10d2878c7445138e/opencanary/logger.py#L52

## Metadata
- **Author:** Security Onion Solutions
- **Date:** 2024-03-08
- **Rule ID:** `cd55f721-5623-4663-bd9b-5229cab5237d`
- **Source file:** `application/opencanary/opencanary_ssh_new_connection.yml`

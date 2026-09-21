---
type: detection_rule
title: "OpenCanary - SSH Login Attempt"
rule_id: ff7139bc-fdb1-4437-92f2-6afefe8884cb
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1133, attack.t1021, attack.t1078]
---

# OpenCanary - SSH Login Attempt

## Description
Detects instances where an SSH service on an OpenCanary node has had a login attempt.

## Log Source
```yaml
category: application
product: opencanary
```

## Detection Logic
```yaml
condition: selection
selection:
  logtype: 4002
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
- **Rule ID:** `ff7139bc-fdb1-4437-92f2-6afefe8884cb`
- **Source file:** `application/opencanary/opencanary_ssh_login_attempt.yml`

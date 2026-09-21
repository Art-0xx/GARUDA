---
type: detection_rule
title: "Okta Suspicious Activity Reported by End-user"
rule_id: 07e97cc6-aed1-43ae-9081-b3470d2367f1
platform: identity
level: high
status: test
tags: [detection, sigma, identity]
mitre_tags: [attack.t1586.003]
---

# Okta Suspicious Activity Reported by End-user

## Description
Detects when an Okta end-user reports activity by their account as being potentially suspicious.

## Log Source
```yaml
product: okta
service: okta
```

## Detection Logic
```yaml
condition: selection
selection:
  eventType: user.account.report_suspicious_activity_by_enduser
```

## MITRE ATT&CK
- T1586.003

## False Positives
- If an end-user incorrectly identifies normal activity as suspicious.

## References
- https://developer.okta.com/docs/reference/api/system-log/
- https://github.com/okta/workflows-templates/blob/1164f0eb71ce47c9ddc7d850e9ab87b5a2b42333/workflows/suspicious_activity_reported/readme.md

## Metadata
- **Author:** kelnage
- **Date:** 2023-09-07
- **Rule ID:** `07e97cc6-aed1-43ae-9081-b3470d2367f1`
- **Source file:** `identity/okta/okta_suspicious_activity_enduser_report.yml`

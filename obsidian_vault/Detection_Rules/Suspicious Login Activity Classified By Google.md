---
type: detection_rule
title: "Suspicious Login Activity Classified By Google"
rule_id: 38360161-76c4-4283-842e-efcf997dafc8
platform: cloud
level: medium
status: experimental
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1078.004]
---

# Suspicious Login Activity Classified By Google

## Description
Detects Google Workspace login activity that's classified as suspicious by Google.

## Log Source
```yaml
product: gcp
service: google_workspace.login
```

## Detection Logic
```yaml
condition: selection
selection:
  protoPayload.Servicename: login.googleapis.com
  protoPayload.metadata.event.eventName:
  - suspicious_login_less_secure_app
  - suspicious_login
  - suspicious_programmatic_login
```

## MITRE ATT&CK
- T1078.004

## False Positives
- Legitimate logins

## References
- https://cloud.google.com/logging/docs/audit/gsuite-audit-logging
- https://cloud.google.com/logging/docs/audit/understanding-audit-logs
- https://developers.google.com/workspace/admin/reports/v1/appendix/activity/login#suspicious_login
- https://developers.google.com/workspace/admin/reports/v1/appendix/activity/login#suspicious_login_less_secure_app
- https://developers.google.com/workspace/admin/reports/v1/appendix/activity/login#suspicious_programmatic_login

## Metadata
- **Author:** Tom Kluter
- **Date:** 2026-04-28
- **Rule ID:** `38360161-76c4-4283-842e-efcf997dafc8`
- **Source file:** `cloud/gcp/gworkspace/login/gcp_gworkspace_suspicious_login.yml`

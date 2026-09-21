---
type: detection_rule
title: "GCP Access Policy Deleted"
rule_id: 32438676-1dba-4ac7-bf69-b86cba995e05
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1098]
---

# GCP Access Policy Deleted

## Description
Detects when an access policy that is applied to a GCP cloud resource is deleted.
An adversary would be able to remove access policies to gain access to a GCP cloud resource.

## Log Source
```yaml
product: gcp
service: gcp.audit
```

## Detection Logic
```yaml
condition: selection
selection:
  data.protoPayload.authorizationInfo.granted: 'true'
  data.protoPayload.authorizationInfo.permission:
  - accesscontextmanager.accessPolicies.delete
  - accesscontextmanager.accessPolicies.accessLevels.delete
  - accesscontextmanager.accessPolicies.accessZones.delete
  - accesscontextmanager.accessPolicies.authorizedOrgsDescs.delete
  data.protoPayload.serviceName: accesscontextmanager.googleapis.com
```

## MITRE ATT&CK
- T1098

## False Positives
- Legitimate administrative activities

## References
- https://cloud.google.com/access-context-manager/docs/audit-logging
- https://cloud.google.com/logging/docs/audit/understanding-audit-logs
- https://cloud.google.com/logging/docs/reference/audit/auditlog/rest/Shared.Types/AuditLog

## Metadata
- **Author:** Bryan Lim
- **Date:** 2024-01-12
- **Rule ID:** `32438676-1dba-4ac7-bf69-b86cba995e05`
- **Source file:** `cloud/gcp/audit/gcp_access_policy_deleted.yml`

---
type: detection_rule
title: "Change to Authentication Method"
rule_id: 4d78a000-ab52-4564-88a5-7ab5242b20c7
platform: cloud
level: medium
status: test
tags: [detection, sigma, cloud]
mitre_tags: [attack.t1556, attack.t1098]
---

# Change to Authentication Method

## Description
Change to authentication method could be an indicator of an attacker adding an auth method to the account so they can have continued access.

## Log Source
```yaml
product: azure
service: auditlogs
```

## Detection Logic
```yaml
condition: selection
selection:
  Category: UserManagement
  LoggedByService: Authentication Methods
  OperationName: User registered security info
```

## MITRE ATT&CK
- T1556
- T1098

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/entra/architecture/security-operations-privileged-accounts

## Metadata
- **Author:** AlertIQ
- **Date:** 2021-10-10
- **Rule ID:** `4d78a000-ab52-4564-88a5-7ab5242b20c7`
- **Source file:** `cloud/azure/audit_logs/azure_change_to_authentication_method.yml`

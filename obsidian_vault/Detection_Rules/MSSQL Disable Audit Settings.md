---
type: detection_rule
title: "MSSQL Disable Audit Settings"
rule_id: 350dfb37-3706-4cdc-9e2e-5e24bc3a46df
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# MSSQL Disable Audit Settings

## Description
Detects when an attacker calls the "ALTER SERVER AUDIT" or "DROP SERVER AUDIT" transaction in order to delete or disable audit logs on the server

## Log Source
```yaml
definition: 'Requirements: MSSQL audit policy must be enabled in order to receive
  this event in the application log'
product: windows
service: application
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains:
  - statement:ALTER SERVER AUDIT
  - statement:DROP SERVER AUDIT
  EventID: 33205
  Provider_Name|contains: MSSQL
```

## False Positives
- This event should only fire when an administrator is modifying the audit policy. Which should be a rare occurrence once it's set up

## References
- https://www.netspi.com/blog/technical/network-penetration-testing/sql-server-persistence-part-1-startup-stored-procedures/
- https://learn.microsoft.com/en-us/sql/t-sql/statements/drop-server-audit-transact-sql?view=sql-server-ver16
- https://learn.microsoft.com/en-us/sql/t-sql/statements/alter-server-audit-transact-sql?view=sql-server-ver16

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-13
- **Rule ID:** `350dfb37-3706-4cdc-9e2e-5e24bc3a46df`
- **Source file:** `windows/builtin/application/mssqlserver/win_mssql_disable_audit_settings.yml`

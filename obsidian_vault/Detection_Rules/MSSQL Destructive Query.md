---
type: detection_rule
title: "MSSQL Destructive Query"
rule_id: 00321fee-ca72-4cce-b011-5415af3b9960
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1485]
---

# MSSQL Destructive Query

## Description
Detects the invocation of MS SQL transactions that are destructive towards table or database data, such as "DROP TABLE" or "DROP DATABASE".

## Log Source
```yaml
definition: 'Requirements: MSSQL audit policy must be enabled in order to receive
  this event (event id 33205)'
product: windows
service: application
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains:
  - statement:TRUNCATE TABLE
  - statement:DROP TABLE
  - statement:DROP DATABASE
  EventID: 33205
  Provider_Name: MSSQLSERVER$AUDIT
```

## MITRE ATT&CK
- T1485

## False Positives
- Legitimate transaction from a sysadmin.

## References
- https://learn.microsoft.com/en-us/sql/t-sql/statements/drop-table-transact-sql?view=sql-server-ver16
- https://learn.microsoft.com/en-us/sql/t-sql/statements/drop-database-transact-sql?view=sql-server-ver16
- https://learn.microsoft.com/en-us/sql/t-sql/statements/truncate-table-transact-sql?view=sql-server-ver16

## Metadata
- **Author:** Daniel Degasperi '@d4ns4n_'
- **Date:** 2025-06-04
- **Rule ID:** `00321fee-ca72-4cce-b011-5415af3b9960`
- **Source file:** `windows/builtin/application/mssqlserver/win_mssql_destructive_query.yml`

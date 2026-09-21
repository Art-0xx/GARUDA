---
type: detection_rule
title: "MSSQL Add Account To Sysadmin Role"
rule_id: 08200f85-2678-463e-9c32-88dce2f073d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# MSSQL Add Account To Sysadmin Role

## Description
Detects when an attacker tries to backdoor the MSSQL server by adding a backdoor account to the sysadmin fixed server role

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
  Data|contains|all:
  - object_name:sysadmin
  - 'statement:alter server role [sysadmin] add member '
  EventID: 33205
  Provider_Name|contains: MSSQL
```

## False Positives
- Rare legitimate administrative activity

## References
- https://www.netspi.com/blog/technical/network-penetration-testing/sql-server-persistence-part-1-startup-stored-procedures/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-13
- **Rule ID:** `08200f85-2678-463e-9c32-88dce2f073d1`
- **Source file:** `windows/builtin/application/mssqlserver/win_mssql_add_sysadmin_account.yml`

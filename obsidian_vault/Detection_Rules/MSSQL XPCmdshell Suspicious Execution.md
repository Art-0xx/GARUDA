---
type: detection_rule
title: "MSSQL XPCmdshell Suspicious Execution"
rule_id: 7f103213-a04e-4d59-8261-213dddf22314
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# MSSQL XPCmdshell Suspicious Execution

## Description
Detects when the MSSQL "xp_cmdshell" stored procedure is used to execute commands

## Log Source
```yaml
definition: 'Requirements: MSSQL audit policy to monitor for "xp_cmdshell" must be
  enabled in order to receive this event in the application log (Follow this tutorial
  https://dba.stackexchange.com/questions/103183/is-there-any-way-to-monitor-execution-of-xp-cmdshell-in-sql-server-2012)'
product: windows
service: application
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains|all:
  - object_name:xp_cmdshell
  - statement:EXEC
  EventID: 33205
  Provider_Name|contains: MSSQL
```

## False Positives
- Unknown

## References
- https://www.netspi.com/blog/technical/network-penetration-testing/sql-server-persistence-part-1-startup-stored-procedures/
- https://thedfirreport.com/2022/07/11/select-xmrig-from-sqlserver/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-12
- **Rule ID:** `7f103213-a04e-4d59-8261-213dddf22314`
- **Source file:** `windows/builtin/application/mssqlserver/win_mssql_xp_cmdshell_audit_log.yml`

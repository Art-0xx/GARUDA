---
type: detection_rule
title: "Remote Schedule Task Recon via ITaskSchedulerService"
rule_id: 7f7c49eb-2977-4ac8-8ab0-ab1bae14730e
platform: application
level: high
status: test
tags: [detection, sigma, application]
---

# Remote Schedule Task Recon via ITaskSchedulerService

## Description
Detects remote RPC calls to read information about scheduled tasks

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:86d35949-83c9-4044-b424-db363231fd0c"'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  OpNum:
  - 1
  - 3
  - 4
  - 10
  - 11
  - 12
  - 13
  - 14
  - 15
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid: 86d35949-83c9-4044-b424-db363231fd0c
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-tsch/d1058a28-7e02-4948-8b8d-4a347fa64931
- https://github.com/jsecurity101/MSRPC-to-ATTACK/blob/ddd4608fe8684fcf2fcf9b48c5f0b3c28097f8a3/documents/MS-TSCH.md
- https://github.com/zeronetworks/rpcfirewall
- https://zeronetworks.com/blog/stopping-lateral-movement-via-the-rpc-firewall/

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `7f7c49eb-2977-4ac8-8ab0-ab1bae14730e`
- **Source file:** `application/rpc_firewall/rpc_firewall_itaskschedulerservice_recon.yml`

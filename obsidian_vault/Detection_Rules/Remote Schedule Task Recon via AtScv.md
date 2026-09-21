---
type: detection_rule
title: "Remote Schedule Task Recon via AtScv"
rule_id: f177f2bc-5f3e-4453-b599-57eefce9a59c
platform: application
level: high
status: test
tags: [detection, sigma, application]
---

# Remote Schedule Task Recon via AtScv

## Description
Detects remote RPC calls to read information about scheduled tasks via AtScv

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:1ff70682-0a51-30e8-076d-740be8cee98b"'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  OpNum:
  - 0
  - 1
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid: 1ff70682-0a51-30e8-076d-740be8cee98b
```

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-tsch/d1058a28-7e02-4948-8b8d-4a347fa64931
- https://github.com/zeronetworks/rpcfirewall
- https://github.com/jsecurity101/MSRPC-to-ATTACK/blob/ddd4608fe8684fcf2fcf9b48c5f0b3c28097f8a3/documents/MS-TSCH.md
- https://zeronetworks.com/blog/stopping-lateral-movement-via-the-rpc-firewall/

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `f177f2bc-5f3e-4453-b599-57eefce9a59c`
- **Source file:** `application/rpc_firewall/rpc_firewall_atsvc_recon.yml`

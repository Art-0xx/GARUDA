---
type: detection_rule
title: "Remote Schedule Task Lateral Movement via SASec"
rule_id: aff229ab-f8cd-447b-b215-084d11e79eb0
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1053, attack.t1053.002]
---

# Remote Schedule Task Lateral Movement via SASec

## Description
Detects remote RPC calls to create or execute a scheduled task via SASec

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:378e52b0-c0a9-11cf-822d-00aa0051e40f"'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid: 378e52b0-c0a9-11cf-822d-00aa0051e40f
  OpNum:
  - 0
  - 1
```

## MITRE ATT&CK
- T1053
- T1053.002

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
- **Rule ID:** `aff229ab-f8cd-447b-b215-084d11e79eb0`
- **Source file:** `application/rpc_firewall/rpc_firewall_sasec_lateral_movement.yml`

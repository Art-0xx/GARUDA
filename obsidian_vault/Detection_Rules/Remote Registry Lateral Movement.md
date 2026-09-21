---
type: detection_rule
title: "Remote Registry Lateral Movement"
rule_id: 35c55673-84ca-4e99-8d09-e334f3c29539
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1112]
---

# Remote Registry Lateral Movement

## Description
Detects remote RPC calls to modify the registry and possible execute code

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:338cd001-2244-31f1-aaaa-900038001003"'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid: 338cd001-2244-31f1-aaaa-900038001003
  OpNum:
  - 6
  - 7
  - 8
  - 13
  - 18
  - 19
  - 21
  - 22
  - 23
  - 35
```

## MITRE ATT&CK
- T1112

## False Positives
- Remote administration of registry values

## References
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rrp/0fa3191d-bb79-490a-81bd-54c2601b7a78
- https://github.com/jsecurity101/MSRPC-to-ATTACK/blob/ddd4608fe8684fcf2fcf9b48c5f0b3c28097f8a3/documents/MS-RRP.md
- https://github.com/zeronetworks/rpcfirewall
- https://zeronetworks.com/blog/stopping-lateral-movement-via-the-rpc-firewall/

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `35c55673-84ca-4e99-8d09-e334f3c29539`
- **Source file:** `application/rpc_firewall/rpc_firewall_remote_registry_lateral_movement.yml`

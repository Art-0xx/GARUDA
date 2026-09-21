---
type: detection_rule
title: "Remote Server Service Abuse for Lateral Movement"
rule_id: 10018e73-06ec-46ec-8107-9172f1e04ff2
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1569.002]
---

# Remote Server Service Abuse for Lateral Movement

## Description
Detects remote RPC calls to possibly abuse remote encryption service via MS-EFSR

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:367abb81-9844-35f1-ad32-98f038001003'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid: 367abb81-9844-35f1-ad32-98f038001003
```

## MITRE ATT&CK
- T1569.002

## False Positives
- Administrative tasks on remote services

## References
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-srvs/accf23b0-0f57-441c-9185-43041f1b0ee9
- https://github.com/jsecurity101/MSRPC-to-ATTACK/blob/ddd4608fe8684fcf2fcf9b48c5f0b3c28097f8a3/documents/MS-SCMR.md
- https://github.com/zeronetworks/rpcfirewall
- https://zeronetworks.com/blog/stopping-lateral-movement-via-the-rpc-firewall/

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `10018e73-06ec-46ec-8107-9172f1e04ff2`
- **Source file:** `application/rpc_firewall/rpc_firewall_remote_service_lateral_movement.yml`

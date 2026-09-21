---
type: detection_rule
title: "Recon Activity via SASec"
rule_id: 0a3ff354-93fc-4273-8a03-1078782de5b7
platform: application
level: high
status: test
tags: [detection, sigma, application]
---

# Recon Activity via SASec

## Description
Detects remote RPC calls to read information about scheduled tasks via SASec

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:378e52b0-c0a9-11cf-822d-00aa0051e40f"'
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
  InterfaceUuid: 378e52b0-c0a9-11cf-822d-00aa0051e40f
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
- **Rule ID:** `0a3ff354-93fc-4273-8a03-1078782de5b7`
- **Source file:** `application/rpc_firewall/rpc_firewall_sasec_recon.yml`

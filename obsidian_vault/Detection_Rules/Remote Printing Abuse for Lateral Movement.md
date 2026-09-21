---
type: detection_rule
title: "Remote Printing Abuse for Lateral Movement"
rule_id: bc3a4b0c-e167-48e1-aa88-b3020950e560
platform: application
level: high
status: test
tags: [detection, sigma, application]
---

# Remote Printing Abuse for Lateral Movement

## Description
Detects remote RPC calls to possibly abuse remote printing service via MS-RPRN / MS-PAR

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes with
  "audit:true action:block uuid:12345678-1234-abcd-ef00-0123456789ab or 76f03f96-cdfd-44fc-a22c-64950a001209
  or ae33069b-a2a8-46ee-a235-ddfd339be281 or 0b6edbfa-4a24-4fc6-8a23-942b1eca65d1'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid:
  - 12345678-1234-abcd-ef00-0123456789ab
  - 76f03f96-cdfd-44fc-a22c-64950a001209
  - 0b6edbfa-4a24-4fc6-8a23-942b1eca65d1
  - ae33069b-a2a8-46ee-a235-ddfd339be281
```

## False Positives
- Actual printing

## References
- https://msrc.microsoft.com/update-guide/vulnerability/CVE-2021-34527
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rprn/d42db7d5-f141-4466-8f47-0a4be14e2fc1
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-pan/e44d984c-07d3-414c-8ffc-f8c8ad8512a8
- https://github.com/jsecurity101/MSRPC-to-ATTACK/blob/ddd4608fe8684fcf2fcf9b48c5f0b3c28097f8a3/documents/MS-RPRN-PAR.md
- https://github.com/zeronetworks/rpcfirewall

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `bc3a4b0c-e167-48e1-aa88-b3020950e560`
- **Source file:** `application/rpc_firewall/rpc_firewall_printing_lateral_movement.yml`

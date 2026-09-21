---
type: detection_rule
title: "Possible DCSync Attack"
rule_id: 56fda488-113e-4ce9-8076-afc2457922c3
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1033]
---

# Possible DCSync Attack

## Description
Detects remote RPC calls to MS-DRSR from non DC hosts, which could indicate DCSync / DCShadow attacks.

## Log Source
```yaml
category: application
definition: 'Requirements: install and apply the RPC Firewall to all processes, enable
  DRSR UUID (e3514235-4b06-11d1-ab04-00c04fc2dcd2) for "dangerous" opcodes (not 0,1
  or 12) only from trusted IPs (DCs)'
product: rpc_firewall
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  OpNum:
  - 0
  - 1
  - 12
selection:
  EventID: 3
  EventLog: RPCFW
  InterfaceUuid: e3514235-4b06-11d1-ab04-00c04fc2dcd2
```

## MITRE ATT&CK
- T1033

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-drsr/f977faaa-673e-4f66-b9bf-48c640241d47?redirectedfrom=MSDN
- https://github.com/jsecurity101/MSRPC-to-ATTACK/blob/ddd4608fe8684fcf2fcf9b48c5f0b3c28097f8a3/documents/MS-DRSR.md
- https://github.com/zeronetworks/rpcfirewall
- https://zeronetworks.com/blog/stopping-lateral-movement-via-the-rpc-firewall/

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `56fda488-113e-4ce9-8076-afc2457922c3`
- **Source file:** `application/rpc_firewall/rpc_firewall_dcsync_attack.yml`

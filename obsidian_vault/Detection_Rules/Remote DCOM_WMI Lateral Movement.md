---
type: detection_rule
title: "Remote DCOM/WMI Lateral Movement"
rule_id: 68050b10-e477-4377-a99b-3721b422d6ef
platform: application
level: high
status: test
tags: [detection, sigma, application]
mitre_tags: [attack.t1021.003, attack.t1047]
---

# Remote DCOM/WMI Lateral Movement

## Description
Detects remote RPC calls that performs remote DCOM operations. These could be abused for lateral movement via DCOM or WMI.

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
  InterfaceUuid:
  - 4d9f4ab8-7d1c-11cf-861e-0020af6e7c57
  - 99fcfec4-5260-101b-bbcb-00aa0021347a
  - 000001a0-0000-0000-c000-000000000046
  - 00000131-0000-0000-c000-000000000046
  - 00000143-0000-0000-c000-000000000046
  - 00000000-0000-0000-c000-000000000046
```

## MITRE ATT&CK
- T1021.003
- T1047

## False Positives
- Some administrative tasks on remote host

## References
- https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-srvs/accf23b0-0f57-441c-9185-43041f1b0ee9
- https://github.com/zeronetworks/rpcfirewall
- https://zeronetworks.com/blog/stopping-lateral-movement-via-the-rpc-firewall/

## Metadata
- **Author:** Sagie Dulce, Dekel Paz
- **Date:** 2022-01-01
- **Rule ID:** `68050b10-e477-4377-a99b-3721b422d6ef`
- **Source file:** `application/rpc_firewall/rpc_firewall_remote_dcom_or_wmi.yml`

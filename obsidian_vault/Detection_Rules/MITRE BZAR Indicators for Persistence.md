---
type: detection_rule
title: "MITRE BZAR Indicators for Persistence"
rule_id: 53389db6-ba46-48e3-a94c-e0f2cefe1583
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1547.004]
---

# MITRE BZAR Indicators for Persistence

## Description
Windows DCE-RPC functions which indicate a persistence techniques on the remote system. All credit for the Zeek mapping of the suspicious endpoint/operation field goes to MITRE.

## Log Source
```yaml
product: zeek
service: dce_rpc
```

## Detection Logic
```yaml
condition: 1 of op*
op1:
  endpoint: spoolss
  operation: RpcAddMonitor
op2:
  endpoint: spoolss
  operation: RpcAddPrintProcessor
op3:
  endpoint: IRemoteWinspool
  operation: RpcAsyncAddMonitor
op4:
  endpoint: IRemoteWinspool
  operation: RpcAsyncAddPrintProcessor
op5:
  endpoint: ISecLogon
  operation: SeclCreateProcessWithLogonW
op6:
  endpoint: ISecLogon
  operation: SeclCreateProcessWithLogonExW
```

## MITRE ATT&CK
- T1547.004

## False Positives
- Windows administrator tasks or troubleshooting
- Windows management scripts or software

## References
- https://github.com/mitre-attack/bzar#indicators-for-attck-persistence

## Metadata
- **Author:** @neu5ron, SOC Prime
- **Date:** 2020-03-19
- **Rule ID:** `53389db6-ba46-48e3-a94c-e0f2cefe1583`
- **Source file:** `network/zeek/zeek_dce_rpc_mitre_bzar_persistence.yml`

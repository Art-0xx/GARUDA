---
type: detection_rule
title: "MITRE BZAR Indicators for Execution"
rule_id: b640c0b8-87f8-4daa-aef8-95a24261dd1d
platform: network
level: medium
status: test
tags: [detection, sigma, network]
mitre_tags: [attack.t1047, attack.t1053.002, attack.t1569.002]
---

# MITRE BZAR Indicators for Execution

## Description
Windows DCE-RPC functions which indicate an execution techniques on the remote system. All credit for the Zeek mapping of the suspicious endpoint/operation field goes to MITRE

## Log Source
```yaml
product: zeek
service: dce_rpc
```

## Detection Logic
```yaml
condition: 1 of op*
op1:
  endpoint: JobAdd
  operation: atsvc
op10:
  endpoint: svcctl
  operation: StartServiceW
op2:
  endpoint: ITaskSchedulerService
  operation: SchRpcEnableTask
op3:
  endpoint: ITaskSchedulerService
  operation: SchRpcRegisterTask
op4:
  endpoint: ITaskSchedulerService
  operation: SchRpcRun
op5:
  endpoint: IWbemServices
  operation: ExecMethod
op6:
  endpoint: IWbemServices
  operation: ExecMethodAsync
op7:
  endpoint: svcctl
  operation: CreateServiceA
op8:
  endpoint: svcctl
  operation: CreateServiceW
op9:
  endpoint: svcctl
  operation: StartServiceA
```

## MITRE ATT&CK
- T1047
- T1053.002
- T1569.002

## False Positives
- Windows administrator tasks or troubleshooting
- Windows management scripts or software

## References
- https://github.com/mitre-attack/bzar#indicators-for-attck-execution

## Metadata
- **Author:** @neu5ron, SOC Prime
- **Date:** 2020-03-19
- **Rule ID:** `b640c0b8-87f8-4daa-aef8-95a24261dd1d`
- **Source file:** `network/zeek/zeek_dce_rpc_mitre_bzar_execution.yml`

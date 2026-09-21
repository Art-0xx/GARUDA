---
type: detection_rule
title: "Potential RemoteFXvGPUDisablement.EXE Abuse - PowerShell Module"
rule_id: 38a7625e-b2cb-485d-b83d-aff137d859f4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potential RemoteFXvGPUDisablement.EXE Abuse - PowerShell Module

## Description
Detects PowerShell module creation where the module Contents are set to "function Get-VMRemoteFXPhysicalVideoAdapter". This could be a sign of potential abuse of the "RemoteFXvGPUDisablement.exe" binary which is known to be vulnerable to module load-order hijacking.

## Log Source
```yaml
category: ps_module
definition: 0ad03ef1-f21b-4a79-8ce8-e6900c54b65b
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Payload|contains: ModuleContents=function Get-VMRemoteFXPhysicalVideoAdapter {
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/AtomicTestHarnesses/blob/7e1e4da116801e3d6fcc6bedb207064577e40572/TestHarnesses/T1218_SignedBinaryProxyExecution/InvokeRemoteFXvGPUDisablementCommand.ps1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), frack113
- **Date:** 2021-07-13
- **Rule ID:** `38a7625e-b2cb-485d-b83d-aff137d859f4`
- **Source file:** `windows/powershell/powershell_module/posh_pm_remotefxvgpudisablement_abuse.yml`

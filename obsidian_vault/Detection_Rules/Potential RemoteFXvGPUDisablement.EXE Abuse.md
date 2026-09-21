---
type: detection_rule
title: "Potential RemoteFXvGPUDisablement.EXE Abuse"
rule_id: f65e22f9-819e-4f96-9c7b-498364ae7a25
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potential RemoteFXvGPUDisablement.EXE Abuse

## Description
Detects PowerShell module creation where the module Contents are set to "function Get-VMRemoteFXPhysicalVideoAdapter". This could be a sign of potential abuse of  the "RemoteFXvGPUDisablement.exe" binary which is known to be vulnerable to module load-order hijacking.

## Log Source
```yaml
definition: fields have to be extract from event
product: windows
service: powershell-classic
```

## Detection Logic
```yaml
condition: selection
selection:
  Data|contains: ModuleContents=function Get-VMRemoteFXPhysicalVideoAdapter {
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/AtomicTestHarnesses/blob/7e1e4da116801e3d6fcc6bedb207064577e40572/TestHarnesses/T1218_SignedBinaryProxyExecution/InvokeRemoteFXvGPUDisablementCommand.ps1

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-07-13
- **Rule ID:** `f65e22f9-819e-4f96-9c7b-498364ae7a25`
- **Source file:** `windows/powershell/powershell_classic/posh_pc_remotefxvgpudisablement_abuse.yml`

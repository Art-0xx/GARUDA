---
type: detection_rule
title: "Potential RemoteFXvGPUDisablement.EXE Abuse - PowerShell ScriptBlock"
rule_id: cacef8fc-9d3d-41f7-956d-455c6e881bc5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potential RemoteFXvGPUDisablement.EXE Abuse - PowerShell ScriptBlock

## Description
Detects PowerShell module creation where the module Contents are set to "function Get-VMRemoteFXPhysicalVideoAdapter". This could be a sign of potential abuse of the "RemoteFXvGPUDisablement.exe" binary which is known to be vulnerable to module load-order hijacking.

## Log Source
```yaml
category: ps_script
definition: bade5735-5ab0-4aa7-a642-a11be0e40872
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|startswith: function Get-VMRemoteFXPhysicalVideoAdapter {
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/AtomicTestHarnesses/blob/7e1e4da116801e3d6fcc6bedb207064577e40572/TestHarnesses/T1218_SignedBinaryProxyExecution/InvokeRemoteFXvGPUDisablementCommand.ps1

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-09
- **Rule ID:** `cacef8fc-9d3d-41f7-956d-455c6e881bc5`
- **Source file:** `windows/powershell/powershell_script/posh_ps_remotefxvgpudisablement_abuse.yml`

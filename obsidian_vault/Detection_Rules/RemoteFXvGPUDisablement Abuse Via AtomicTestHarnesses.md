---
type: detection_rule
title: "RemoteFXvGPUDisablement Abuse Via AtomicTestHarnesses"
rule_id: a6fc3c46-23b8-4996-9ea2-573f4c4d88c5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# RemoteFXvGPUDisablement Abuse Via AtomicTestHarnesses

## Description
Detects calls to the AtomicTestHarnesses "Invoke-ATHRemoteFXvGPUDisablementCommand" which is designed to abuse the "RemoteFXvGPUDisablement.exe" binary to run custom PowerShell code via module load-order hijacking.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - Invoke-ATHRemoteFXvGPUDisablementCommand
  - Invoke-ATHRemoteFXvGPUDisableme
```

## MITRE ATT&CK
- T1218

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1218/T1218.md
- https://github.com/redcanaryco/AtomicTestHarnesses/blob/7e1e4da116801e3d6fcc6bedb207064577e40572/TestHarnesses/T1218_SignedBinaryProxyExecution/InvokeRemoteFXvGPUDisablementCommand.ps1

## Metadata
- **Author:** frack113
- **Date:** 2021-07-13
- **Rule ID:** `a6fc3c46-23b8-4996-9ea2-573f4c4d88c5`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_remotefxvgpudisablement_abuse.yml`

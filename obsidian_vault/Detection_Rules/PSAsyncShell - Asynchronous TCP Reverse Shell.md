---
type: detection_rule
title: "PSAsyncShell - Asynchronous TCP Reverse Shell"
rule_id: afd3df04-948d-46f6-ae44-25966c44b97f
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PSAsyncShell - Asynchronous TCP Reverse Shell

## Description
Detects the use of PSAsyncShell an Asynchronous TCP Reverse Shell written in powershell

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains: PSAsyncShell
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unlikely

## References
- https://github.com/JoelGMSec/PSAsyncShell

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-04
- **Rule ID:** `afd3df04-948d-46f6-ae44-25966c44b97f`
- **Source file:** `windows/powershell/powershell_script/posh_ps_psasyncshell.yml`

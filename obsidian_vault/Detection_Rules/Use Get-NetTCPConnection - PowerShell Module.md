---
type: detection_rule
title: "Use Get-NetTCPConnection - PowerShell Module"
rule_id: aff815cc-e400-4bf0-a47a-5d8a2407d4e1
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1049]
---

# Use Get-NetTCPConnection - PowerShell Module

## Description
Adversaries may attempt to get a listing of network connections to or from the compromised system they are currently accessing or from remote systems by querying for information over the network.

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
  ContextInfo|contains: Get-NetTCPConnection
```

## MITRE ATT&CK
- T1049

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1049/T1049.md#atomic-test-2---system-network-connections-discovery-with-powershell

## Metadata
- **Author:** frack113
- **Date:** 2021-12-10
- **Rule ID:** `aff815cc-e400-4bf0-a47a-5d8a2407d4e1`
- **Source file:** `windows/powershell/powershell_module/posh_pm_susp_get_nettcpconnection.yml`

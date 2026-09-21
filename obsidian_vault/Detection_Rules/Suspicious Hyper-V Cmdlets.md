---
type: detection_rule
title: "Suspicious Hyper-V Cmdlets"
rule_id: 42d36aa1-3240-4db0-8257-e0118dcdd9cd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.006]
---

# Suspicious Hyper-V Cmdlets

## Description
Adversaries may carry out malicious operations using a virtual instance to avoid detection

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
  ScriptBlockText|contains:
  - New-VM
  - Set-VMFirmware
  - Start-VM
```

## MITRE ATT&CK
- T1564.006

## False Positives
- Legitimate PowerShell scripts

## References
- https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1564.006/T1564.006.md#atomic-test-3---create-and-start-hyper-v-virtual-machine

## Metadata
- **Author:** frack113
- **Date:** 2022-04-09
- **Rule ID:** `42d36aa1-3240-4db0-8257-e0118dcdd9cd`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_hyper_v_condlet.yml`

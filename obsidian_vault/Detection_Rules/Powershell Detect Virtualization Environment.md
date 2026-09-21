---
type: detection_rule
title: "Powershell Detect Virtualization Environment"
rule_id: d93129cd-1ee0-479f-bc03-ca6f129882e3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1497.001]
---

# Powershell Detect Virtualization Environment

## Description
Adversaries may employ various system checks to detect and avoid virtualization and analysis environments.
This may include changing behaviors based on the results of checks for the presence of artifacts indicative of a virtual machine environment (VME) or sandbox

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_action:
  ScriptBlockText|contains:
  - Get-WmiObject
  - gwmi
selection_module:
  ScriptBlockText|contains:
  - MSAcpi_ThermalZoneTemperature
  - Win32_ComputerSystem
```

## MITRE ATT&CK
- T1497.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1497.001/T1497.001.md
- https://techgenix.com/malicious-powershell-scripts-evade-detection/

## Metadata
- **Author:** frack113, Duc.Le-GTSC
- **Date:** 2021-08-03
- **Rule ID:** `d93129cd-1ee0-479f-bc03-ca6f129882e3`
- **Source file:** `windows/powershell/powershell_script/posh_ps_detect_vm_env.yml`

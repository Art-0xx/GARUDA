---
type: detection_rule
title: "Powershell WMI Persistence"
rule_id: 9e07f6e7-83aa-45c6-998e-0af26efd0a85
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.003]
---

# Powershell WMI Persistence

## Description
Adversaries may establish persistence and elevate privileges by executing malicious content triggered by a Windows Management Instrumentation (WMI) event subscription.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection_ioc
selection_ioc:
- ScriptBlockText|contains|all:
  - 'New-CimInstance '
  - '-Namespace root/subscription '
  - '-ClassName __EventFilter '
  - '-Property '
- ScriptBlockText|contains|all:
  - 'New-CimInstance '
  - '-Namespace root/subscription '
  - '-ClassName CommandLineEventConsumer '
  - '-Property '
```

## MITRE ATT&CK
- T1546.003

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.003/T1546.003.md
- https://github.com/EmpireProject/Empire/blob/08cbd274bef78243d7a8ed6443b8364acd1fc48b/data/module_source/persistence/Persistence.psm1#L545

## Metadata
- **Author:** frack113
- **Date:** 2021-08-19
- **Rule ID:** `9e07f6e7-83aa-45c6-998e-0af26efd0a85`
- **Source file:** `windows/powershell/powershell_script/posh_ps_wmi_persistence.yml`

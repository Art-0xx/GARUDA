---
type: detection_rule
title: "Malicious ShellIntel PowerShell Commandlets"
rule_id: 402e1e1d-ad59-47b6-bf80-1ee44985b3a7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Malicious ShellIntel PowerShell Commandlets

## Description
Detects Commandlet names from ShellIntel exploitation scripts.

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
  - Invoke-SMBAutoBrute
  - Invoke-GPOLinks
  - Invoke-Potato
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/Shellntel/scripts/

## Metadata
- **Author:** Max Altgelt (Nextron Systems), Tobias Michalski (Nextron Systems)
- **Date:** 2021-08-09
- **Rule ID:** `402e1e1d-ad59-47b6-bf80-1ee44985b3a7`
- **Source file:** `windows/powershell/powershell_script/posh_ps_shellintel_malicious_commandlets.yml`

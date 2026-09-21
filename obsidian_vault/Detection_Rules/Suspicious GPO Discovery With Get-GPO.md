---
type: detection_rule
title: "Suspicious GPO Discovery With Get-GPO"
rule_id: eb2fd349-ec67-4caa-9143-d79c7fb34441
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1615]
---

# Suspicious GPO Discovery With Get-GPO

## Description
Detect use of Get-GPO to get one GPO or all the GPOs in a domain.

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
  ScriptBlockText|contains: Get-GPO
```

## MITRE ATT&CK
- T1615

## False Positives
- Legitimate PowerShell scripts

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1615/T1615.md
- https://learn.microsoft.com/en-us/powershell/module/grouppolicy/get-gpo?view=windowsserver2022-ps

## Metadata
- **Author:** frack113
- **Date:** 2022-06-04
- **Rule ID:** `eb2fd349-ec67-4caa-9143-d79c7fb34441`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_get_gpo.yml`

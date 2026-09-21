---
type: detection_rule
title: "PowerShell ShellCode"
rule_id: 16b37b70-6fcf-4814-a092-c36bd3aafcbd
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055, attack.t1059.001]
---

# PowerShell ShellCode

## Description
Detects Base64 encoded Shellcode

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
  - OiCAAAAYInlM
  - OiJAAAAYInlM
```

## MITRE ATT&CK
- T1055
- T1059.001

## False Positives
- Unknown

## References
- https://twitter.com/cyb3rops/status/1063072865992523776

## Metadata
- **Author:** David Ledbetter (shellcode), Florian Roth (Nextron Systems)
- **Date:** 2018-11-17
- **Rule ID:** `16b37b70-6fcf-4814-a092-c36bd3aafcbd`
- **Source file:** `windows/powershell/powershell_script/posh_ps_shellcode_b64.yml`

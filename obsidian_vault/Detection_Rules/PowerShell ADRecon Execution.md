---
type: detection_rule
title: "PowerShell ADRecon Execution"
rule_id: bf72941a-cba0-41ea-b18c-9aca3925690d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# PowerShell ADRecon Execution

## Description
Detects execution of ADRecon.ps1 for AD reconnaissance which has been reported to be actively used by FIN7

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
  - Function Get-ADRExcelComOb
  - Get-ADRGPO
  - Get-ADRDomainController
  - ADRecon-Report.xlsx
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/sense-of-security/ADRecon/blob/11881a24e9c8b207f31b56846809ce1fb189bcc9/ADRecon.ps1
- https://bi-zone.medium.com/from-pentest-to-apt-attack-cybercriminal-group-fin7-disguises-its-malware-as-an-ethical-hackers-c23c9a75e319

## Metadata
- **Author:** Bhabesh Raj
- **Date:** 2021-07-16
- **Rule ID:** `bf72941a-cba0-41ea-b18c-9aca3925690d`
- **Source file:** `windows/powershell/powershell_script/posh_ps_adrecon_execution.yml`

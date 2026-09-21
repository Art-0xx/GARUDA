---
type: detection_rule
title: "Import PowerShell Modules From Suspicious Directories"
rule_id: 21f9162c-5f5d-4b01-89a8-b705bd7d10ab
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Import PowerShell Modules From Suspicious Directories

## Description
Detects powershell scripts that import modules from suspicious directories

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
  - Import-Module "$Env:Temp\
  - Import-Module '$Env:Temp\
  - Import-Module $Env:Temp\
  - Import-Module "$Env:Appdata\
  - Import-Module '$Env:Appdata\
  - Import-Module $Env:Appdata\
  - Import-Module C:\Users\Public\
  - ipmo "$Env:Temp\
  - ipmo '$Env:Temp\
  - ipmo $Env:Temp\
  - ipmo "$Env:Appdata\
  - ipmo '$Env:Appdata\
  - ipmo $Env:Appdata\
  - ipmo C:\Users\Public\
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1003.002/T1003.002.md

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-07
- **Rule ID:** `21f9162c-5f5d-4b01-89a8-b705bd7d10ab`
- **Source file:** `windows/powershell/powershell_script/posh_ps_import_module_susp_dirs.yml`

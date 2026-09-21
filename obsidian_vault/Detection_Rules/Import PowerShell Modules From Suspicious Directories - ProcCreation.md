---
type: detection_rule
title: "Import PowerShell Modules From Suspicious Directories - ProcCreation"
rule_id: c31364f7-8be6-4b77-8483-dd2b5a7b69a3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Import PowerShell Modules From Suspicious Directories - ProcCreation

## Description
Detects powershell scripts that import modules from suspicious directories

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
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
- **Date:** 2023-01-10
- **Rule ID:** `c31364f7-8be6-4b77-8483-dd2b5a7b69a3`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_import_module_susp_dirs.yml`

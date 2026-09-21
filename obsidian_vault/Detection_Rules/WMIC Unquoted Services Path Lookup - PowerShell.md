---
type: detection_rule
title: "WMIC Unquoted Services Path Lookup - PowerShell"
rule_id: 09658312-bc27-4a3b-91c5-e49ab9046d1b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# WMIC Unquoted Services Path Lookup - PowerShell

## Description
Detects known WMI recon method to look for unquoted service paths, often used by pentest inside of powershell scripts attackers enum scripts

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
  - 'Get-WmiObject '
  - 'gwmi '
  ScriptBlockText|contains|all:
  - ' Win32_Service '
  - Name
  - DisplayName
  - PathName
  - StartMode
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://github.com/nccgroup/redsnarf/blob/35949b30106ae543dc6f2bc3f1be10c6d9a8d40e/redsnarf.py
- https://github.com/S3cur3Th1sSh1t/Creds/blob/eac23d67f7f90c7fc8e3130587d86158c22aa398/PowershellScripts/jaws-enum.ps1
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `09658312-bc27-4a3b-91c5-e49ab9046d1b`
- **Source file:** `windows/powershell/powershell_script/posh_ps_wmi_unquoted_service_search.yml`

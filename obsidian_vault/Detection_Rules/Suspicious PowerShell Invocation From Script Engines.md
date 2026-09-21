---
type: detection_rule
title: "Suspicious PowerShell Invocation From Script Engines"
rule_id: 95eadcb2-92e4-4ed1-9031-92547773a6db
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious PowerShell Invocation From Script Engines

## Description
Detects suspicious powershell invocations from interpreters or unusual programs

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_health_service:
  CurrentDirectory|contains: \Health Service State\
selection:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  ParentImage|endswith:
  - \wscript.exe
  - \cscript.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Microsoft Operations Manager (MOM)
- Other scripts

## References
- https://www.securitynewspaper.com/2017/03/20/attackers-leverage-excel-powershell-dns-latest-non-malware-attack/

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-01-16
- **Rule ID:** `95eadcb2-92e4-4ed1-9031-92547773a6db`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_script_engine_parent.yml`

---
type: detection_rule
title: "Run PowerShell Script from ADS"
rule_id: 45a594aa-1fbd-4972-a809-ff5a99dd81b8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Run PowerShell Script from ADS

## Description
Detects PowerShell script execution from Alternate Data Stream (ADS)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - Get-Content
  - -Stream
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  ParentImage|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unknown

## References
- https://github.com/p0shkatz/Get-ADS/blob/1c3a3562e713c254edce1995a7d9879c687c7473/Get-ADS.ps1

## Metadata
- **Author:** Sergey Soldatov, Kaspersky Lab, oscd.community
- **Date:** 2019-10-30
- **Rule ID:** `45a594aa-1fbd-4972-a809-ff5a99dd81b8`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_run_script_from_ads.yml`

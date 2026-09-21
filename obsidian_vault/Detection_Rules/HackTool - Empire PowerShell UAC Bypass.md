---
type: detection_rule
title: "HackTool - Empire PowerShell UAC Bypass"
rule_id: 3268b746-88d8-4cd3-bffc-30077d02c787
platform: windows
level: critical
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# HackTool - Empire PowerShell UAC Bypass

## Description
Detects some Empire PowerShell UAC bypass methods

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
  - ' -NoP -NonI -w Hidden -c $x=$((gp HKCU:Software\Microsoft\Windows Update).Update)'
  - ' -NoP -NonI -c $x=$((gp HKCU:Software\Microsoft\Windows Update).Update);'
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/EmpireProject/Empire/blob/e37fb2eef8ff8f5a0a689f1589f424906fe13055/data/module_source/privesc/Invoke-EventVwrBypass.ps1#L64
- https://github.com/EmpireProject/Empire/blob/e37fb2eef8ff8f5a0a689f1589f424906fe13055/data/module_source/privesc/Invoke-FodHelperBypass.ps1#L64

## Metadata
- **Author:** Ecco
- **Date:** 2019-08-30
- **Rule ID:** `3268b746-88d8-4cd3-bffc-30077d02c787`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_empire_powershell_uac_bypass.yml`

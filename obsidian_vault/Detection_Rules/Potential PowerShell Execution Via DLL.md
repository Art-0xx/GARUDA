---
type: detection_rule
title: "Potential PowerShell Execution Via DLL"
rule_id: 6812a10b-60ea-420c-832f-dfcc33b646ba
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# Potential PowerShell Execution Via DLL

## Description
Detects potential PowerShell execution from a DLL instead of the usual PowerShell process as seen used in PowerShdll.
This detection assumes that PowerShell commands are passed via the CommandLine.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - Default.GetString
  - DownloadString
  - FromBase64String
  - 'ICM '
  - 'IEX '
  - Invoke-Command
  - Invoke-Expression
selection_img:
- Image|endswith:
  - \InstallUtil.exe
  - \RegAsm.exe
  - \RegSvcs.exe
  - \regsvr32.exe
  - \rundll32.exe
- OriginalFileName:
  - InstallUtil.exe
  - RegAsm.exe
  - RegSvcs.exe
  - REGSVR32.EXE
  - RUNDLL32.EXE
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://github.com/p3nt4/PowerShdll/blob/62cfa172fb4e1f7f4ac00ca942685baeb88ff356/README.md

## Metadata
- **Author:** Markus Neis, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2018-08-25
- **Rule ID:** `6812a10b-60ea-420c-832f-dfcc33b646ba`
- **Source file:** `windows/process_creation/proc_creation_win_susp_powershell_execution_via_dll.yml`

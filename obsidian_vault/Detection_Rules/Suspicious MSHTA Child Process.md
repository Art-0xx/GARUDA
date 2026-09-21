---
type: detection_rule
title: "Suspicious MSHTA Child Process"
rule_id: 03cc0c25-389f-4bf8-b48d-11878079f1ca
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.005]
---

# Suspicious MSHTA Child Process

## Description
Detects a suspicious process spawning from an "mshta.exe" process, which could be indicative of a malicious HTA script execution

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_child:
- Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \wscript.exe
  - \cscript.exe
  - \sh.exe
  - \bash.exe
  - \reg.exe
  - \regsvr32.exe
  - \bitsadmin.exe
- OriginalFileName:
  - Cmd.Exe
  - PowerShell.EXE
  - pwsh.dll
  - wscript.exe
  - cscript.exe
  - Bash.exe
  - reg.exe
  - REGSVR32.EXE
  - bitsadmin.exe
selection_parent:
  ParentImage|endswith: \mshta.exe
```

## MITRE ATT&CK
- T1218.005

## False Positives
- Printer software / driver installations
- HP software

## References
- https://www.trustedsec.com/july-2015/malicious-htas/

## Metadata
- **Author:** Michael Haag
- **Date:** 2019-01-16
- **Rule ID:** `03cc0c25-389f-4bf8-b48d-11878079f1ca`
- **Source file:** `windows/process_creation/proc_creation_win_mshta_susp_child_processes.yml`

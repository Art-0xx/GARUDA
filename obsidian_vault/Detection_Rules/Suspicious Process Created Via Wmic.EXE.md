---
type: detection_rule
title: "Suspicious Process Created Via Wmic.EXE"
rule_id: 3c89a1e8-0fba-449e-8f1b-8409d6267ec8
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Suspicious Process Created Via Wmic.EXE

## Description
Detects WMIC executing "process call create" with suspicious calls to processes such as "rundll32", "regsrv32", etc.

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
  - rundll32
  - bitsadmin
  - regsvr32
  - 'cmd.exe /c '
  - 'cmd.exe /k '
  - 'cmd.exe /r '
  - 'cmd /c '
  - 'cmd /k '
  - 'cmd /r '
  - powershell
  - pwsh
  - certutil
  - cscript
  - wscript
  - mshta
  - \Users\Public\
  - \Windows\Temp\
  - \AppData\Local\
  - '%temp%'
  - '%tmp%'
  - '%ProgramData%'
  - '%appdata%'
  - '%comspec%'
  - '%localappdata%'
  CommandLine|contains|all:
  - 'process '
  - 'call '
  - 'create '
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://thedfirreport.com/2020/10/08/ryuks-return/
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/ransomware-hive-conti-avoslocker

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2020-10-12
- **Rule ID:** `3c89a1e8-0fba-449e-8f1b-8409d6267ec8`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_susp_process_creation.yml`

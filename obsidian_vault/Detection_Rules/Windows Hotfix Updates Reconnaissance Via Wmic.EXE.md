---
type: detection_rule
title: "Windows Hotfix Updates Reconnaissance Via Wmic.EXE"
rule_id: dfd2fcb7-8bd5-4daa-b132-5adb61d6ad45
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047]
---

# Windows Hotfix Updates Reconnaissance Via Wmic.EXE

## Description
Detects the execution of wmic with the "qfe" flag in order to obtain information about installed hotfix updates on the system. This is often used by pentester and attacker enumeration scripts

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_cli:
  CommandLine|contains: ' qfe'
selection_img:
- OriginalFileName: wmic.exe
- Image|endswith: \WMIC.exe
```

## MITRE ATT&CK
- T1047

## False Positives
- Unknown

## References
- https://github.com/carlospolop/PEASS-ng/blob/fa0f2e17fbc1d86f1fd66338a40e665e7182501d/winPEAS/winPEASbat/winPEAS.bat
- https://sushant747.gitbooks.io/total-oscp-guide/content/privilege_escalation_windows.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-20
- **Rule ID:** `dfd2fcb7-8bd5-4daa-b132-5adb61d6ad45`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_recon_hotfix.yml`

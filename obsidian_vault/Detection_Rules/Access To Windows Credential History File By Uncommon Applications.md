---
type: detection_rule
title: "Access To Windows Credential History File By Uncommon Applications"
rule_id: 7a2a22ea-a203-4cd3-9abf-20eb1c5c6cd2
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555.004]
---

# Access To Windows Credential History File By Uncommon Applications

## Description
Detects file access requests to the Windows Credential History File by an uncommon application.
This can be a sign of credential stealing. Example case would be usage of mimikatz "dpapi::credhist" function

## Log Source
```yaml
category: file_access
definition: 'Requirements: Microsoft-Windows-Kernel-File ETW provider'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_explorer:
  Image: C:\Windows\explorer.exe
filter_main_system_folders:
  Image|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
  - C:\Windows\system32\
  - C:\Windows\SysWOW64\
selection:
  FileName|endswith: \Microsoft\Protect\CREDHIST
```

## MITRE ATT&CK
- T1555.004

## False Positives
- Unknown

## References
- https://tools.thehacker.recipes/mimikatz/modules/dpapi/credhist
- https://www.passcape.com/windows_password_recovery_dpapi_credhist

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-17
- **Rule ID:** `7a2a22ea-a203-4cd3-9abf-20eb1c5c6cd2`
- **Source file:** `windows/file/file_access/file_access_win_susp_credhist.yml`

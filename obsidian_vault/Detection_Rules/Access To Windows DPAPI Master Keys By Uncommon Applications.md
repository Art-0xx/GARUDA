---
type: detection_rule
title: "Access To Windows DPAPI Master Keys By Uncommon Applications"
rule_id: 46612ae6-86be-4802-bc07-39b59feb1309
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1555.004]
---

# Access To Windows DPAPI Master Keys By Uncommon Applications

## Description
Detects file access requests to the the Windows Data Protection API Master keys by an uncommon application.
This can be a sign of credential stealing. Example case would be usage of mimikatz "dpapi::masterkey" function

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
  FileName|contains:
  - \Microsoft\Protect\S-1-5-18\
  - \Microsoft\Protect\S-1-5-21-
```

## MITRE ATT&CK
- T1555.004

## False Positives
- Unknown

## References
- http://blog.harmj0y.net/redteaming/operational-guidance-for-offensive-user-dpapi-abuse/
- https://book.hacktricks.xyz/windows-hardening/windows-local-privilege-escalation/dpapi-extracting-passwords

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-17
- **Rule ID:** `46612ae6-86be-4802-bc07-39b59feb1309`
- **Source file:** `windows/file/file_access/file_access_win_susp_dpapi_master_key_access.yml`

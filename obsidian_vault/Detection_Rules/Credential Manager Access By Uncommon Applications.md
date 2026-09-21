---
type: detection_rule
title: "Credential Manager Access By Uncommon Applications"
rule_id: 407aecb1-e762-4acf-8c7b-d087bcff3bb6
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Credential Manager Access By Uncommon Applications

## Description
Detects suspicious processes based on name and location that access the windows credential manager and vault.
Which can be a sign of credential stealing. Example case would be usage of mimikatz "dpapi::cred" function

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
  - \AppData\Local\Microsoft\Credentials\
  - \AppData\Roaming\Microsoft\Credentials\
  - \AppData\Local\Microsoft\Vault\
  - \ProgramData\Microsoft\Vault\
```

## MITRE ATT&CK
- T1003

## False Positives
- Legitimate software installed by the users for example in the "AppData" directory may access these files (for any reason).

## References
- https://hunter2.gitbook.io/darthsidious/privilege-escalation/mimikatz
- https://www.absolomb.com/2018-01-26-Windows-Privilege-Escalation-Guide/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-10-11
- **Rule ID:** `407aecb1-e762-4acf-8c7b-d087bcff3bb6`
- **Source file:** `windows/file/file_access/file_access_win_susp_credential_manager_access.yml`

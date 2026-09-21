---
type: detection_rule
title: "Hiding User Account Via SpecialAccounts Registry Key - CommandLine"
rule_id: 9ec9fb1b-e059-4489-9642-f270c207923d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.002]
---

# Hiding User Account Via SpecialAccounts Registry Key - CommandLine

## Description
Detects changes to the registry key "HKLM\Software\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\Userlist" where the value is set to "0" in order to hide user account from being listed on the logon screen.

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
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion\Winlogon\SpecialAccounts\UserList
  - add
  - /v
  - /d 0
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1564.002

## False Positives
- System administrator activities

## References
- https://thedfirreport.com/2024/01/29/buzzing-on-christmas-eve-trigona-ransomware-in-3-hours/
- https://thedfirreport.com/2024/04/01/from-onenote-to-ransomnote-an-ice-cold-intrusion/
- https://thedfirreport.com/2024/04/29/from-icedid-to-dagon-locker-ransomware-in-29-days/
- https://thedfirreport.com/2022/07/11/select-xmrig-from-sqlserver/

## Metadata
- **Author:** @Kostastsale, TheDFIRReport
- **Date:** 2022-05-14
- **Rule ID:** `9ec9fb1b-e059-4489-9642-f270c207923d`
- **Source file:** `windows/process_creation/proc_creation_win_registry_special_accounts_hide_user.yml`

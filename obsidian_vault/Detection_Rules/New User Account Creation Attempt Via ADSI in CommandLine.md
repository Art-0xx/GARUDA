---
type: detection_rule
title: "New User Account Creation Attempt Via ADSI in CommandLine"
rule_id: 7c9fed65-039a-4055-8c23-fa763d94aff6
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1136.001, attack.t1136.002]
---

# New User Account Creation Attempt Via ADSI in CommandLine

## Description
Detects PowerShell command line arguments containing ADSI (Active Directory Service Interfaces) patterns
trying to create a new user account via the WinNT or LDAP provider. This is an uncommon method to create
user accounts and may indicate an attempt to evade detection by avoiding more commonly monitored commands
such as "net user", "New-LocalUser" or "New-ADUser".

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_adsi:
  CommandLine|contains: '[ADSI]'
selection_cli_adsi_provider:
  CommandLine|contains:
  - WinNT://
  - LDAP://
selection_cli_create_user:
  CommandLine|contains:
  - .Create("user
  - .Create('user
selection_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1136.001
- T1136.002

## False Positives
- Legitimate administrative scripts that use ADSI to provision user accounts but should be rare in most environments

## References
- https://learn.microsoft.com/en-us/windows/win32/adsi/user-creation-with-the-adsi-ldap-provider
- https://learn.microsoft.com/en-us/windows/win32/adsi/adsi-winnt-provider

## Metadata
- **Author:** William Gokah (idea), Raylee Hawkins, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-08-13
- **Rule ID:** `7c9fed65-039a-4055-8c23-fa763d94aff6`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_adsi_create_user.yml`

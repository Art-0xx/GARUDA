---
type: detection_rule
title: "Potentially Suspicious Explicit Credential Local Logon"
rule_id: e3c6d245-7b8f-4e2a-c17f-a9d0e5b38f62
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1134, attack.t1134.003]
---

# Potentially Suspicious Explicit Credential Local Logon

## Description
Detects potentially suspicious explicit credential logon events where the user
is trying to logon with explicit credentials (username and password) that are
different from the current user context. It might indicate an attacker attempting
to escalate privileges after obtaining credentials for a different user account.

## Log Source
```yaml
product: windows
service: security
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_computer_accounts:
  SubjectUserName|endswith: $
filter_main_program_files:
  ProcessName|startswith:
  - C:\Program Files\
  - C:\Program Files (x86)\
filter_main_same_user:
  SubjectUserName|fieldref: TargetUserName
filter_main_system_processes:
  ProcessName|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\WinSxS\
selection_eid:
  EventID: 4648
selection_localhost:
- TargetServerName: localhost
- TargetInfo: localhost
- IpAddress:
  - 127.0.0.1
  - ::1
```

## MITRE ATT&CK
- T1134
- T1134.003

## False Positives
- RunAs usage from user-installed applications outside Program Files
- Administrative scripts using explicit credentials from non-standard paths

## References
- https://learn.microsoft.com/en-us/windows/security/threat-protection/auditing/event-4648
- https://github.com/MSNightmare/LegacyHive

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-07-23
- **Rule ID:** `e3c6d245-7b8f-4e2a-c17f-a9d0e5b38f62`
- **Source file:** `windows/builtin/security/win_security_explicit_credential_local_logon.yml`

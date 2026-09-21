---
type: detection_rule
title: "Windows Event Log Access Tampering Via Registry"
rule_id: ba226dcf-d390-4642-b9af-b534872f1156
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001, attack.t1112]
---

# Windows Event Log Access Tampering Via Registry

## Description
Detects changes to the Windows EventLog channel permission values. It focuses on changes to the Security Descriptor Definition Language (SDDL) string, as modifications to these values can restrict access to specific users or groups, potentially aiding in defense evasion by controlling who can view or modify a event log channel. Upon execution, the user shouldn't be able to access the event log channel via the event viewer or via utilities such as "Get-EventLog" or "wevtutil".

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_key_* and selection_details and not 1 of filter_main_* and
  not 1 of filter_optional_*
filter_main_tiworker:
  Image|endswith: \TiWorker.exe
  Image|startswith: C:\Windows\WinSxS\
filter_main_trustedinstaller:
  Image: C:\Windows\servicing\TrustedInstaller.exe
filter_optional_empty:
  Image: ''
filter_optional_null:
  Image: null
selection_details:
- Details|contains: D:(D;
- Details|contains|all:
  - D:(
  - )(D;
selection_key_1:
  TargetObject|contains: \SYSTEM\CurrentControlSet\Services\EventLog\
  TargetObject|endswith: \CustomSD
selection_key_2:
  TargetObject|contains:
  - \Policies\Microsoft\Windows\EventLog\
  - \Microsoft\Windows\CurrentVersion\WINEVT\Channels
  TargetObject|endswith: \ChannelAccess
```

## MITRE ATT&CK
- T1547.001
- T1112

## False Positives
- Administrative activity, still unlikely

## References
- https://www.atomicredteam.io/atomic-red-team/atomics/T1562.002#atomic-test-8---modify-event-log-channel-access-permissions-via-registry---powershell
- https://www.youtube.com/watch?v=uSYvHUVU8xY
- https://learn.microsoft.com/en-us/windows/win32/secauthz/security-descriptor-definition-language

## Metadata
- **Author:** X__Junior
- **Date:** 2025-01-16
- **Rule ID:** `ba226dcf-d390-4642-b9af-b534872f1156`
- **Source file:** `windows/registry/registry_set/registry_set_disable_windows_event_log_access.yml`

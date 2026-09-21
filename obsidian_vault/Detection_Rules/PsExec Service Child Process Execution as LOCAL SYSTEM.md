---
type: detection_rule
title: "PsExec Service Child Process Execution as LOCAL SYSTEM"
rule_id: 7c0dcd3d-acf8-4f71-9570-f448b0034f94
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# PsExec Service Child Process Execution as LOCAL SYSTEM

## Description
Detects suspicious launch of the PSEXESVC service on this system and a sub process run as LOCAL_SYSTEM (-s), which means that someone remotely started a command on this system running it with highest privileges and not only the privileges of the login user account (e.g. the administrator account)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ParentImage: C:\Windows\PSEXESVC.exe
  User|contains:
  - AUTHORI
  - AUTORI
```

## False Positives
- Users that debug Microsoft Intune issues using the commands mentioned in the official documentation; see https://learn.microsoft.com/en-us/mem/intune/apps/intune-management-extension

## References
- https://learn.microsoft.com/en-us/sysinternals/downloads/psexec

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-07-21
- **Rule ID:** `7c0dcd3d-acf8-4f71-9570-f448b0034f94`
- **Source file:** `windows/process_creation/proc_creation_win_sysinternals_psexesvc_as_system.yml`

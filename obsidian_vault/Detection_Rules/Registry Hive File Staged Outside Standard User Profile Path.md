---
type: detection_rule
title: "Registry Hive File Staged Outside Standard User Profile Path"
rule_id: a7f3c891-2e4d-4b6a-9f8c-d5e2a1b04c73
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548, attack.t1003]
---

# Registry Hive File Staged Outside Standard User Profile Path

## Description
Detects the creation of a registry hive file (UsrClass.dat or NTUSER.DAT) outside of the standard user profile path.
These files generally contain various user-specific registry settings and are typically located in the user's profile directory.
Staging these files outside of the standard path can be indicative of an attacker attempting to manipulate user registry settings
for persistence, privilege escalation, or dump user registry hives for credential harvesting.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_ntuser:
  TargetFilename|re|i: ^C:\\Users\\[^\\]+\\NTUSER\.DAT$
filter_main_system:
  TargetFilename|startswith:
  - C:\Windows\System32\config\
  - C:\Windows\SYSVOL\
  - C:\Windows\ServiceProfiles\
filter_main_usrclass:
  TargetFilename|endswith: \AppData\Local\Microsoft\Windows\UsrClass.dat
selection:
  TargetFilename|endswith:
  - \UsrClass.dat
  - \NTUSER.DAT
```

## MITRE ATT&CK
- T1548
- T1003

## False Positives
- Backup or profile migration software
- Forensic acquisition tools

## References
- https://github.com/MSNightmare/LegacyHive
- https://git.projectnightcrawler.dev/NightmareEclipse/LegacyHive

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-07-23
- **Rule ID:** `a7f3c891-2e4d-4b6a-9f8c-d5e2a1b04c73`
- **Source file:** `windows/file/file_event/file_event_win_susp_registry_hive_file_creation.yml`

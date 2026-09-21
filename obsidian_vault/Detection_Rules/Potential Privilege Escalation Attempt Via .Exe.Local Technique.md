---
type: detection_rule
title: "Potential Privilege Escalation Attempt Via .Exe.Local Technique"
rule_id: 07a99744-56ac-40d2-97b7-2095967b0e03
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Potential Privilege Escalation Attempt Via .Exe.Local Technique

## Description
Detects potential privilege escalation attempt via the creation of the "*.Exe.Local" folder inside the "System32" directory in order to sideload "comctl32.dll"

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \comctl32.dll
  TargetFilename|startswith:
  - C:\Windows\System32\logonUI.exe.local
  - C:\Windows\System32\werFault.exe.local
  - C:\Windows\System32\consent.exe.local
  - C:\Windows\System32\narrator.exe.local
  - C:\Windows\System32\wermgr.exe.local
```

## False Positives
- Unknown

## References
- https://github.com/binderlabs/DirCreate2System
- https://github.com/sailay1996/awesome_windows_logical_bugs/blob/60cbb23a801f4c3195deac1cc46df27c225c3d07/dir_create2system.txt

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Subhash P (@pbssubhash)
- **Date:** 2022-12-16
- **Rule ID:** `07a99744-56ac-40d2-97b7-2095967b0e03`
- **Source file:** `windows/file/file_event/file_event_win_system32_local_folder_privilege_escalation.yml`

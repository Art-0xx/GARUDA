---
type: detection_rule
title: "Potentially Suspicious Child Process Of DiskShadow.EXE"
rule_id: 9f546b25-5f12-4c8d-8532-5893dcb1e4b8
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218]
---

# Potentially Suspicious Child Process Of DiskShadow.EXE

## Description
Detects potentially suspicious child processes of "Diskshadow.exe". This could be an attempt to bypass parent/child relationship detection or application whitelisting rules.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \certutil.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
  ParentImage|endswith: \diskshadow.exe
```

## MITRE ATT&CK
- T1218

## False Positives
- False postitve can occur in cases where admin scripts levreage the "exec" flag to execute applications

## References
- https://bohops.com/2018/03/26/diskshadow-the-return-of-vss-evasion-persistence-and-active-directory-database-extraction/
- https://www.ired.team/offensive-security/credential-access-and-credential-dumping/ntds.dit-enumeration
- https://medium.com/@cyberjyot/lolbin-execution-via-diskshadow-f6ff681a27a4
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskshadow
- https://www.lifars.com/wp-content/uploads/2022/01/GriefRansomware_Whitepaper-2.pdf

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-09-15
- **Rule ID:** `9f546b25-5f12-4c8d-8532-5893dcb1e4b8`
- **Source file:** `windows/process_creation/proc_creation_win_diskshadow_child_process_susp.yml`

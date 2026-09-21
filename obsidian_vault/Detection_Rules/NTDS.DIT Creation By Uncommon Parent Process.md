---
type: detection_rule
title: "NTDS.DIT Creation By Uncommon Parent Process"
rule_id: 4e7050dd-e548-483f-b7d6-527ab4fa784d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.003]
---

# NTDS.DIT Creation By Uncommon Parent Process

## Description
Detects creation of a file named "ntds.dit" (Active Directory Database) by an uncommon parent process or directory

## Log Source
```yaml
category: file_event
definition: 'Requirements: The "ParentImage" field is not available by default on
  EID 11 of Sysmon logs. To be able to use this rule to the full extent you need to
  enrich the log with additional ParentImage data'
product: windows
```

## Detection Logic
```yaml
condition: selection_file and 1 of selection_process_*
selection_file:
  TargetFilename|endswith: \ntds.dit
selection_process_parent:
  ParentImage|endswith:
  - \cscript.exe
  - \httpd.exe
  - \nginx.exe
  - \php-cgi.exe
  - \powershell.exe
  - \pwsh.exe
  - \w3wp.exe
  - \wscript.exe
selection_process_parent_path:
  ParentImage|contains:
  - \apache
  - \tomcat
  - \AppData\
  - \Temp\
  - \Public\
  - \PerfLogs\
```

## MITRE ATT&CK
- T1003.003

## False Positives
- Unknown

## References
- https://www.ired.team/offensive-security/credential-access-and-credential-dumping/ntds.dit-enumeration
- https://www.n00py.io/2022/03/manipulating-user-passwords-without-mimikatz/
- https://pentestlab.blog/tag/ntds-dit/
- https://github.com/samratashok/nishang/blob/414ee1104526d7057f9adaeee196d91ae447283e/Gather/Copy-VSS.ps1

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-03-11
- **Rule ID:** `4e7050dd-e548-483f-b7d6-527ab4fa784d`
- **Source file:** `windows/file/file_event/file_event_win_ntds_dit_uncommon_parent_process.yml`

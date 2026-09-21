---
type: detection_rule
title: "Script Interpreter Execution From Suspicious Folder"
rule_id: 1228c958-e64e-4e71-92ad-7d429f4138ba
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Script Interpreter Execution From Suspicious Folder

## Description
Detects suspicious script execution from suspicious directories or folders accessible by environment variables that may indicate malware activity.
Script interpreters (cscript, wscript, mshta, powershell) executing from folders like Temp, Public, or user profile directories may suggest attempts to evade detection or execute malicious scripts.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_proc_* and 1 of selection_folders_* and not 1 of filter_optional_*
filter_optional_chocolatey_installer:
  CommandLine|contains|all:
  - -NoProfile -ExecutionPolicy Bypass -Command
  - AppData\Local\Temp\
  - Install-Chocolatey.ps1
  Image|endswith: \powershell.exe
  ParentImage:
  - C:\Windows\System32\Msiexec.exe
  - C:\Windows\SysWOW64\Msiexec.exe
selection_folders_1:
  CommandLine|contains:
  - :\Perflogs\
  - :\Users\Public\
  - \%Public%
  - \AppData\Local\Temp
  - \AppData\Roaming\Temp
  - \Temporary Internet
  - \Windows\Temp
  - \Start Menu\Programs\Startup\
  - '%TEMP%'
  - '%TMP%'
  - '%LocalAppData%\Temp'
selection_folders_2:
- CommandLine|contains|all:
  - :\Users\
  - \Favorites\
- CommandLine|contains|all:
  - :\Users\
  - \Favourites\
- CommandLine|contains|all:
  - :\Users\
  - \Contacts\
- CommandLine|contains|all:
  - :\Users\
  - \Documents\
- CommandLine|contains|all:
  - :\Users\
  - \Music\
- CommandLine|contains|all:
  - :\Users\
  - \Pictures\
- CommandLine|contains|all:
  - :\Users\
  - \Videos\
selection_proc_flags:
  CommandLine|contains:
  - ' -ep bypass '
  - ' -ExecutionPolicy bypass '
  - ' -w hidden '
  - '/e:javascript '
  - '/e:Jscript '
  - '/e:vbscript '
selection_proc_image:
  Image|endswith:
  - \cscript.exe
  - \mshta.exe
  - \wscript.exe
selection_proc_original:
  OriginalFileName:
  - cscript.exe
  - mshta.exe
  - wscript.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- Various legitimate software have been observed to use similar techniques for installation or update purposes;thus, it is recommended to review and tune filters for your environment to reduce false positives before deploying to production.

## References
- https://www.virustotal.com/gui/file/91ba814a86ddedc7a9d546e26f912c541205b47a853d227756ab1334ade92c3f
- https://symantec-enterprise-blogs.security.com/blogs/threat-intelligence/shuckworm-russia-ukraine-military
- https://learn.microsoft.com/en-us/windows/win32/shell/csidl

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-02-08
- **Rule ID:** `1228c958-e64e-4e71-92ad-7d429f4138ba`
- **Source file:** `windows/process_creation/proc_creation_win_susp_script_exec_from_env_folder.yml`

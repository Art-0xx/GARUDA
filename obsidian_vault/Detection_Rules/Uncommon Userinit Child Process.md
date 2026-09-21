---
type: detection_rule
title: "Uncommon Userinit Child Process"
rule_id: 0a98a10c-685d-4ab0-bddc-b6bdd1d48458
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1037.001]
---

# Uncommon Userinit Child Process

## Description
Detects uncommon "userinit.exe" child processes, which could be a sign of uncommon shells or login scripts used for persistence.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_explorer:
  Image|endswith: :\WINDOWS\explorer.exe
filter_optional_citrix:
  Image|endswith:
  - :\Program Files (x86)\Citrix\HDX\bin\cmstart.exe
  - :\Program Files (x86)\Citrix\HDX\bin\icast.exe
  - :\Program Files (x86)\Citrix\System32\icast.exe
  - :\Program Files\Citrix\HDX\bin\cmstart.exe
  - :\Program Files\Citrix\HDX\bin\icast.exe
  - :\Program Files\Citrix\System32\icast.exe
filter_optional_image_null:
  Image: null
filter_optional_logonscripts:
  CommandLine|contains:
  - netlogon.bat
  - UsrLogon.cmd
filter_optional_proquota:
  Image|endswith:
  - :\Windows\System32\proquota.exe
  - :\Windows\SysWOW64\proquota.exe
filter_optional_windows_core:
  CommandLine: PowerShell.exe
selection:
  ParentImage|endswith: \userinit.exe
```

## MITRE ATT&CK
- T1037.001

## False Positives
- Legitimate logon scripts or custom shells may trigger false positives. Apply additional filters accordingly.

## References
- https://cocomelonc.github.io/persistence/2022/12/09/malware-pers-20.html
- https://learn.microsoft.com/en-us/windows-server/administration/server-core/server-core-sconfig#powershell-is-the-default-shell-on-server-core

## Metadata
- **Author:** Tom Ueltschi (@c_APT_ure), Tim Shelton
- **Date:** 2019-01-12
- **Rule ID:** `0a98a10c-685d-4ab0-bddc-b6bdd1d48458`
- **Source file:** `windows/process_creation/proc_creation_win_userinit_uncommon_child_processes.yml`

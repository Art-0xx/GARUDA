---
type: detection_rule
title: "Elevated System Shell Spawned From Uncommon Parent Location"
rule_id: 178e615d-e666-498b-9630-9ed363038101
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Elevated System Shell Spawned From Uncommon Parent Location

## Description
Detects when a shell program such as the Windows command prompt or PowerShell is launched with system privileges from a uncommon parent location.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  ParentImage|contains:
  - :\Program Files (x86)\
  - :\Program Files\
  - :\ProgramData\
  - :\Windows\System32\
  - :\Windows\SysWOW64\
  - :\Windows\Temp\
  - :\Windows\WinSxS\
filter_main_parent_empty:
  ParentImage:
  - ''
  - '-'
filter_main_parent_null:
  ParentImage: null
filter_optional_asgard:
  CommandLine|contains: :\WINDOWS\system32\cmd.exe /c "
  CurrentDirectory|contains: :\WINDOWS\Temp\asgard2-agent\
filter_optional_ibm_spectrumprotect:
  CommandLine|contains: :\IBM\SpectrumProtect\webserver\scripts\
  ParentImage|contains: :\IBM\SpectrumProtect\webserver\scripts\
filter_optional_manageengine:
  Image|endswith: \cmd.exe
  ParentImage|endswith: :\ManageEngine\ADManager Plus\pgsql\bin\postgres.exe
selection_shell:
- Image|endswith:
  - \powershell.exe
  - \powershell_ise.exe
  - \pwsh.exe
  - \cmd.exe
- OriginalFileName:
  - PowerShell.EXE
  - powershell_ise.EXE
  - pwsh.dll
  - Cmd.Exe
selection_user:
  LogonId: '0x3e7'
  User|contains:
  - AUTHORI
  - AUTORI
```

## MITRE ATT&CK
- T1059

## False Positives
- Some legitimate applications may spawn shells from uncommon parent locations. Apply additional filters and perform an initial baseline before deploying.

## References
- https://github.com/Wh04m1001/SysmonEoP

## Metadata
- **Author:** frack113, Tim Shelton (update fp)
- **Date:** 2022-12-05
- **Rule ID:** `178e615d-e666-498b-9630-9ed363038101`
- **Source file:** `windows/process_creation/proc_creation_win_susp_elevated_system_shell_uncommon_parent.yml`

---
type: detection_rule
title: "Windows Binaries Write Suspicious Extensions"
rule_id: b8fd0e93-ff58-4cbd-8f48-1c114e342e62
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Windows Binaries Write Suspicious Extensions

## Description
Detects Windows executables that write files with suspicious extensions

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_* and not 1 of filter_main_*
filter_main_AppLockerPolicyTest:
  Image: C:\Windows\System32\dllhost.exe
  TargetFilename|contains|all:
  - :\Users\
  - \AppData\Local\Temp\__PSScriptPolicyTest_
  TargetFilename|endswith: .ps1
filter_main_clipchamp:
  Image: C:\Windows\system32\svchost.exe
  TargetFilename|contains|all:
  - C:\Program Files\WindowsApps\Clipchamp
  - .ps1
filter_main_powershell_preview:
  Image:
  - C:\Windows\system32\svchost.exe
  - C:\Windows\SysWOW64\svchost.exe
  TargetFilename|endswith: .ps1
  TargetFilename|startswith:
  - C:\Program Files\WindowsApps\Microsoft.PowerShellPreview
  - C:\Program Files (x86)\WindowsApps\Microsoft.PowerShellPreview
filter_main_script_gpo_machine:
  Image: C:\Windows\system32\svchost.exe
  TargetFilename|contains|all:
  - C:\Windows\System32\GroupPolicy\DataStore\
  - \sysvol\
  - \Policies\
  - \Machine\Scripts\Startup\
  TargetFilename|endswith:
  - .ps1
  - .bat
selection_generic:
  Image|endswith:
  - \csrss.exe
  - \lsass.exe
  - \RuntimeBroker.exe
  - \sihost.exe
  - \smss.exe
  - \wininit.exe
  - \winlogon.exe
  TargetFilename|endswith:
  - .bat
  - .dll
  - .exe
  - .hta
  - .iso
  - .ps1
  - .txt
  - .vbe
  - .vbs
selection_special:
  Image|endswith:
  - \dllhost.exe
  - \rundll32.exe
  - \svchost.exe
  TargetFilename|endswith:
  - .bat
  - .hta
  - .iso
  - .ps1
  - .vbe
  - .vbs
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-12
- **Rule ID:** `b8fd0e93-ff58-4cbd-8f48-1c114e342e62`
- **Source file:** `windows/file/file_event/file_event_win_shell_write_susp_files_extensions.yml`

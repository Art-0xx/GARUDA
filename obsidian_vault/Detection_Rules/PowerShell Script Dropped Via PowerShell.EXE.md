---
type: detection_rule
title: "PowerShell Script Dropped Via PowerShell.EXE"
rule_id: 576426ad-0131-4001-ae01-be175da0c108
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
---

# PowerShell Script Dropped Via PowerShell.EXE

## Description
Detects PowerShell creating a PowerShell file (.ps1). While often times this behavior is benign, sometimes it can be a sign of a dropper script trying to achieve persistence.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_appdata:
  TargetFilename|contains: \AppData\Local\Temp\
  TargetFilename|startswith: C:\Users\
filter_main_psscriptpolicytest:
  TargetFilename|contains: __PSScriptPolicyTest_
filter_main_windows_temp:
  TargetFilename|startswith: C:\Windows\Temp\
selection:
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  TargetFilename|endswith: .ps1
```

## False Positives
- False positives will differ depending on the environment and scripts used. Apply additional filters accordingly.

## References
- https://www.zscaler.com/blogs/security-research/onenote-growing-threat-malware-distribution

## Metadata
- **Author:** frack113
- **Date:** 2023-05-09
- **Rule ID:** `576426ad-0131-4001-ae01-be175da0c108`
- **Source file:** `windows/file/file_event/file_event_win_powershell_drop_powershell.yml`

---
type: detection_rule
title: "Suspicious ScreenSave Change by Reg.exe"
rule_id: 0fc35fc3-efe6-4898-8a37-0b233339524f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.002]
---

# Suspicious ScreenSave Change by Reg.exe

## Description
Adversaries may establish persistence by executing malicious content triggered by user inactivity.
Screensavers are programs that execute after a configurable time of user inactivity and consist of Portable Executable (PE) files with a .scr file extension

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_reg and 1 of selection_option_*
selection_option_1:
  CommandLine|contains|all:
  - /v ScreenSaveActive
  - /t REG_SZ
  - /d 1
  - /f
selection_option_2:
  CommandLine|contains|all:
  - /v ScreenSaveTimeout
  - /t REG_SZ
  - '/d '
  - /f
selection_option_3:
  CommandLine|contains|all:
  - /v ScreenSaverIsSecure
  - /t REG_SZ
  - /d 0
  - /f
selection_option_4:
  CommandLine|contains|all:
  - /v SCRNSAVE.EXE
  - /t REG_SZ
  - '/d '
  - .scr
  - /f
selection_reg:
  CommandLine|contains:
  - HKEY_CURRENT_USER\Control Panel\Desktop
  - HKCU\Control Panel\Desktop
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1546.002

## False Positives
- GPO

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.002/T1546.002.md
- https://www.welivesecurity.com/wp-content/uploads/2017/08/eset-gazer.pdf

## Metadata
- **Author:** frack113
- **Date:** 2021-08-19
- **Rule ID:** `0fc35fc3-efe6-4898-8a37-0b233339524f`
- **Source file:** `windows/process_creation/proc_creation_win_reg_screensaver.yml`

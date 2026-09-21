---
type: detection_rule
title: "Suspicious File Creation In Uncommon AppData Folder"
rule_id: d7b50671-d1ad-4871-aa60-5aa5b331fe04
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious File Creation In Uncommon AppData Folder

## Description
Detects the creation of suspicious files and folders inside the user's AppData folder but not inside any of the common and well known directories (Local, Romaing, LocalLow). This method could be used as a method to bypass detection who exclude the AppData folder in fear of FPs

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter_main
filter_main:
  TargetFilename|contains:
  - \AppData\Local\
  - \AppData\LocalLow\
  - \AppData\Roaming\
  TargetFilename|startswith: C:\Users\
selection:
  TargetFilename|contains: \AppData\
  TargetFilename|endswith:
  - .bat
  - .cmd
  - .cpl
  - .dll
  - .exe
  - .hta
  - .iso
  - .lnk
  - .msi
  - .ps1
  - .psm1
  - .scr
  - .vbe
  - .vbs
  TargetFilename|startswith: C:\Users\
```

## False Positives
- Unlikely

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-05
- **Rule ID:** `d7b50671-d1ad-4871-aa60-5aa5b331fe04`
- **Source file:** `windows/file/file_event/file_event_win_new_files_in_uncommon_appdata_folder.yml`

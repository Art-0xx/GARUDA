---
type: detection_rule
title: "Potential Persistence Via Microsoft Office Startup Folder"
rule_id: 0e20c89d-2264-44ae-8238-aeeaba609ece
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1137]
---

# Potential Persistence Via Microsoft Office Startup Folder

## Description
Detects creation of Microsoft Office files inside of one of the default startup folders in order to achieve persistence.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: (all of selection_word_* or all of selection_excel_*) and not filter_main_office
filter_main_office:
  Image|endswith:
  - \WINWORD.exe
  - \EXCEL.exe
selection_excel_extension:
  TargetFilename|endswith:
  - .xls
  - .xlsm
  - .xlsx
  - .xlt
  - .xltm
selection_excel_paths:
- TargetFilename|contains: \Microsoft\Excel\XLSTART
- TargetFilename|contains|all:
  - \Office
  - \Program Files
  - \XLSTART
selection_word_extension:
  TargetFilename|endswith:
  - .doc
  - .docm
  - .docx
  - .dot
  - .dotm
  - .rtf
selection_word_paths:
- TargetFilename|contains: \Microsoft\Word\STARTUP
- TargetFilename|contains|all:
  - \Office
  - \Program Files
  - \STARTUP
```

## MITRE ATT&CK
- T1137

## False Positives
- Loading a user environment from a backup or a domain controller
- Synchronization of templates

## References
- https://insight-jp.nttsecurity.com/post/102hojk/operation-restylink-apt-campaign-targeting-japanese-companies
- https://learn.microsoft.com/en-us/office/troubleshoot/excel/use-startup-folders

## Metadata
- **Author:** Max Altgelt (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-06-02
- **Rule ID:** `0e20c89d-2264-44ae-8238-aeeaba609ece`
- **Source file:** `windows/file/file_event/file_event_win_office_startup_persistence.yml`

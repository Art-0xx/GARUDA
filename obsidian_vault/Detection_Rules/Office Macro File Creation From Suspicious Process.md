---
type: detection_rule
title: "Office Macro File Creation From Suspicious Process"
rule_id: b1c50487-1967-4315-a026-6491686d860e
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1566.001]
---

# Office Macro File Creation From Suspicious Process

## Description
Detects the creation of a office macro file from a a suspicious process

## Log Source
```yaml
category: file_event
definition: 'Requirements: The "ParentImage" field is not available by default on
  EID 11 of Sysmon logs. To be able to use this rule to the full extent you need to
  enriche the log with additional ParentImage data'
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cmd:
- Image|endswith:
  - \cscript.exe
  - \mshta.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
- ParentImage|endswith:
  - \cscript.exe
  - \mshta.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
selection_ext:
  TargetFilename|endswith:
  - .docm
  - .dotm
  - .xlsm
  - .xltm
  - .potm
  - .pptm
```

## MITRE ATT&CK
- T1566.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1566.001/T1566.001.md
- https://learn.microsoft.com/en-us/deployoffice/compat/office-file-format-reference

## Metadata
- **Author:** frack113, Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-01-23
- **Rule ID:** `b1c50487-1967-4315-a026-6491686d860e`
- **Source file:** `windows/file/file_event/file_event_win_office_macro_files_from_susp_process.yml`

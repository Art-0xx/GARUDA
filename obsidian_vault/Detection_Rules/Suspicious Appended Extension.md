---
type: detection_rule
title: "Suspicious Appended Extension"
rule_id: e3f673b3-65d1-4d80-9146-466f8b63fa99
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1486]
---

# Suspicious Appended Extension

## Description
Detects file renames where the target filename uses an uncommon double extension. Could indicate potential ransomware activity renaming files and adding a custom extension to the encrypted files, such as ".jpg.crypted", ".docx.locky", etc.

## Log Source
```yaml
category: file_rename
definition: 'Requirements: Microsoft-Windows-Kernel-File Provider with at least the
  KERNEL_FILE_KEYWORD_RENAME_SETLINK_PATH keyword'
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_* and not 1 of filter_optional_*
filter_main_generic:
  TargetFilename|endswith:
  - .backup
  - .bak
  - .old
  - .orig
  - .temp
  - .tmp
filter_optional_anaconda:
  TargetFilename|contains: :\ProgramData\Anaconda3\
  TargetFilename|endswith: .c~
selection:
  SourceFilename|endswith:
  - .doc
  - .docx
  - .jpeg
  - .jpg
  - .lnk
  - .pdf
  - .png
  - .pst
  - .rtf
  - .xls
  - .xlsx
  TargetFilename|contains:
  - .doc.
  - .docx.
  - .jpeg.
  - .jpg.
  - .lnk.
  - .pdf.
  - .png.
  - .pst.
  - .rtf.
  - .xls.
  - .xlsx.
```

## MITRE ATT&CK
- T1486

## False Positives
- Backup software

## References
- https://app.any.run/tasks/d66ead5a-faf4-4437-93aa-65785afaf9e5/
- https://blog.cyble.com/2022/08/10/onyx-ransomware-renames-its-leak-site-to-vsop/

## Metadata
- **Author:** frack113
- **Date:** 2022-07-16
- **Rule ID:** `e3f673b3-65d1-4d80-9146-466f8b63fa99`
- **Source file:** `windows/file/file_rename/file_rename_win_ransomware.yml`

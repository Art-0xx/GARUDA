---
type: detection_rule
title: "Backup Files Deleted"
rule_id: 06125661-3814-4e03-bfa2-1e4411c60ac3
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Backup Files Deleted

## Description
Detects deletion of files with extensions often used for backup files. Adversaries may delete or remove built-in operating system data and turn off services designed to aid in the recovery of a corrupted system to prevent recovery.

## Log Source
```yaml
category: file_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \wt.exe
  - \rundll32.exe
  - \regsvr32.exe
  TargetFilename|endswith:
  - .VHD
  - .bac
  - .bak
  - .wbcat
  - .bkf
  - .set
  - .win
  - .dsk
```

## MITRE ATT&CK
- T1490

## False Positives
- Legitimate usage

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md#atomic-test-6---windows---delete-backup-files

## Metadata
- **Author:** frack113
- **Date:** 2022-01-02
- **Rule ID:** `06125661-3814-4e03-bfa2-1e4411c60ac3`
- **Source file:** `windows/file/file_delete/file_delete_win_delete_backup_file.yml`

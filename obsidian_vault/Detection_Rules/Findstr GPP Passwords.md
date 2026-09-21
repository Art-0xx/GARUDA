---
type: detection_rule
title: "Findstr GPP Passwords"
rule_id: 91a2c315-9ee6-4052-a853-6f6a8238f90d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.006]
---

# Findstr GPP Passwords

## Description
Look for the encrypted cpassword value within Group Policy Preference files on the Domain Controller. This value can be decrypted with gpp-decrypt.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains|all:
  - cpassword
  - \sysvol\
  - .xml
selection_img:
- Image|endswith:
  - \find.exe
  - \findstr.exe
- OriginalFileName:
  - FIND.EXE
  - FINDSTR.EXE
```

## MITRE ATT&CK
- T1552.006

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.006/T1552.006.md#atomic-test-1---gpp-passwords-findstr

## Metadata
- **Author:** frack113
- **Date:** 2021-12-27
- **Rule ID:** `91a2c315-9ee6-4052-a853-6f6a8238f90d`
- **Source file:** `windows/process_creation/proc_creation_win_findstr_gpp_passwords.yml`

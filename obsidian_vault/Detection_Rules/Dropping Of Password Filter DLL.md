---
type: detection_rule
title: "Dropping Of Password Filter DLL"
rule_id: b7966f4a-b333-455b-8370-8ca53c229762
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1556.002]
---

# Dropping Of Password Filter DLL

## Description
Detects dropping of dll files in system32 that may be used to retrieve user credentials from LSASS

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_cmdline
selection_cmdline:
  CommandLine|contains|all:
  - HKLM\SYSTEM\CurrentControlSet\Control\Lsa
  - scecli\0*
  - reg add
```

## MITRE ATT&CK
- T1556.002

## False Positives
- Unknown

## References
- https://pentestlab.blog/2020/02/10/credential-access-password-filter-dll/
- https://github.com/3gstudent/PasswordFilter/tree/master/PasswordFilter

## Metadata
- **Author:** Sreeman
- **Date:** 2020-10-29
- **Rule ID:** `b7966f4a-b333-455b-8370-8ca53c229762`
- **Source file:** `windows/process_creation/proc_creation_win_reg_credential_access_via_password_filter.yml`

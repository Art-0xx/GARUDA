---
type: detection_rule
title: "Forfiles.EXE Child Process Masquerading"
rule_id: f53714ec-5077-420e-ad20-907ff9bb2958
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Forfiles.EXE Child Process Masquerading

## Description
Detects the execution of "forfiles" from a non-default location, in order to potentially spawn a custom "cmd.exe" from the current working directory.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_parent_not_sys:
  Image|contains:
  - :\Windows\System32\
  - :\Windows\SysWOW64\
  Image|endswith: \cmd.exe
  ParentImage|contains:
  - :\Windows\System32\
  - :\Windows\SysWOW64\
  ParentImage|endswith: \forfiles.exe
selection:
  CommandLine|startswith: /c echo "
  Image|endswith: \cmd.exe
  ParentCommandLine|endswith:
  - .exe
  - .exe"
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://www.hexacorn.com/blog/2023/12/31/1-little-known-secret-of-forfiles-exe/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Anish Bogati
- **Date:** 2024-01-05
- **Rule ID:** `f53714ec-5077-420e-ad20-907ff9bb2958`
- **Source file:** `windows/process_creation/proc_creation_win_forfiles_child_process_masquerading.yml`

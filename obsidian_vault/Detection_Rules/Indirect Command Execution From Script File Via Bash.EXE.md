---
type: detection_rule
title: "Indirect Command Execution From Script File Via Bash.EXE"
rule_id: 2d22a514-e024-4428-9dba-41505bd63a5b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Indirect Command Execution From Script File Via Bash.EXE

## Description
Detects execution of Microsoft bash launcher without any flags to execute the content of a bash script directly.
This can be used to potentially bypass defenses and execute Linux or Windows-based binaries directly via bash.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_cli_flag:
  CommandLine|contains:
  - bash.exe -
  - bash -
filter_main_empty:
  CommandLine: ''
filter_main_no_cli:
  CommandLine: null
filter_main_no_flag:
  CommandLine:
  - bash.exe
  - bash
selection:
- Image|endswith:
  - :\Windows\System32\bash.exe
  - :\Windows\SysWOW64\bash.exe
- OriginalFileName: Bash.exe
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Bash/
- https://linux.die.net/man/1/bash
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-08-15
- **Rule ID:** `2d22a514-e024-4428-9dba-41505bd63a5b`
- **Source file:** `windows/process_creation/proc_creation_win_bash_file_execution.yml`

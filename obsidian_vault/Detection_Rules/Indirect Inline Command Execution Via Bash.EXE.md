---
type: detection_rule
title: "Indirect Inline Command Execution Via Bash.EXE"
rule_id: 5edc2273-c26f-406c-83f3-f4d948e740dd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Indirect Inline Command Execution Via Bash.EXE

## Description
Detects execution of Microsoft bash launcher with the "-c" flag.
This can be used to potentially bypass defenses and execute Linux or Windows-based binaries directly via bash.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: ' -c '
selection_img:
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

## Metadata
- **Author:** frack113
- **Date:** 2021-11-24
- **Rule ID:** `5edc2273-c26f-406c-83f3-f4d948e740dd`
- **Source file:** `windows/process_creation/proc_creation_win_bash_command_execution.yml`

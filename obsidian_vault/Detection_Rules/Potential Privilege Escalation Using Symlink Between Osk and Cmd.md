---
type: detection_rule
title: "Potential Privilege Escalation Using Symlink Between Osk and Cmd"
rule_id: e9b61244-893f-427c-b287-3e708f321c6b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.008]
---

# Potential Privilege Escalation Using Symlink Between Osk and Cmd

## Description
Detects the creation of a symbolic link between "cmd.exe" and the accessibility on-screen keyboard binary (osk.exe) using "mklink". This technique provides an elevated command prompt to the user from the login screen without the need to log in.

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
  - mklink
  - \osk.exe
  - \cmd.exe
selection_img:
- Image|endswith: \cmd.exe
- OriginalFileName: Cmd.Exe
```

## MITRE ATT&CK
- T1546.008

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/5c1e6f1b4fafd01c8d1ece85f510160fc1275fbf/atomics/T1546.008/T1546.008.md
- https://ss64.com/nt/mklink.html

## Metadata
- **Author:** frack113
- **Date:** 2022-12-11
- **Rule ID:** `e9b61244-893f-427c-b287-3e708f321c6b`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_mklink_osk_cmd.yml`

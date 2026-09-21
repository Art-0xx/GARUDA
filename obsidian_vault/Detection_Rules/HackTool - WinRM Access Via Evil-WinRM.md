---
type: detection_rule
title: "HackTool - WinRM Access Via Evil-WinRM"
rule_id: a197e378-d31b-41c0-9635-cfdf1c1bb423
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1021.006]
---

# HackTool - WinRM Access Via Evil-WinRM

## Description
Adversaries may use Valid Accounts to log into a computer using the Remote Desktop Protocol (RDP). The adversary may then perform actions as the logged-on user.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - '-i '
  - '-u '
  - '-p '
  Image|endswith: \ruby.exe
```

## MITRE ATT&CK
- T1021.006

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1021.006/T1021.006.md#atomic-test-3---winrm-access-with-evil-winrm
- https://github.com/Hackplayers/evil-winrm

## Metadata
- **Author:** frack113
- **Date:** 2022-01-07
- **Rule ID:** `a197e378-d31b-41c0-9635-cfdf1c1bb423`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_evil_winrm.yml`

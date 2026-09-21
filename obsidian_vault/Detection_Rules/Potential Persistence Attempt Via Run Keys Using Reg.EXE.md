---
type: detection_rule
title: "Potential Persistence Attempt Via Run Keys Using Reg.EXE"
rule_id: de587dce-915e-4218-aac4-835ca6af6f70
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Potential Persistence Attempt Via Run Keys Using Reg.EXE

## Description
Detects suspicious command line reg.exe tool adding key to RUN key in Registry

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - Software\Microsoft\Windows\CurrentVersion\Run
  - \Software\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
  - \Software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
  CommandLine|contains|all:
  - reg
  - ' add '
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Legitimate software automatically (mostly, during installation) sets up autorun keys for legitimate reasons.
- Legitimate administrator sets up autorun keys for legitimate reasons.
- Discord

## References
- https://app.any.run/tasks/9c0f37bc-867a-4314-b685-e101566766d7/
- https://learn.microsoft.com/en-us/windows/win32/setupapi/run-and-runonce-registry-keys
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** Florian Roth (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2021-06-28
- **Rule ID:** `de587dce-915e-4218-aac4-835ca6af6f70`
- **Source file:** `windows/process_creation/proc_creation_win_reg_add_run_key.yml`

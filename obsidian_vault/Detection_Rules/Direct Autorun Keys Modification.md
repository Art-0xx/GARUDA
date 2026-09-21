---
type: detection_rule
title: "Direct Autorun Keys Modification"
rule_id: 24357373-078f-44ed-9ac4-6d334a668a11
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1547.001]
---

# Direct Autorun Keys Modification

## Description
Detects direct modification of autostart extensibility point (ASEP) in registry using reg.exe.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_add:
  CommandLine|contains: add
selection_cli_keys:
  CommandLine|contains:
  - \software\Microsoft\Windows\CurrentVersion\Run
  - \software\WOW6432Node\Microsoft\Windows\CurrentVersion\Run
  - \software\Microsoft\Windows\CurrentVersion\Policies\Explorer\Run
  - \software\Microsoft\Windows NT\CurrentVersion\Winlogon\Userinit
  - \software\Microsoft\Windows NT\CurrentVersion\Winlogon\Shell
  - \software\Microsoft\Windows NT\CurrentVersion\Windows
  - \system\CurrentControlSet\Control\SafeBoot\AlternateShell
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1547.001

## False Positives
- Legitimate software automatically (mostly, during installation) sets up autorun keys for legitimate reasons.
- Legitimate administrator sets up autorun keys for legitimate reasons.
- Discord

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1547.001/T1547.001.md
- https://github.com/HackTricks-wiki/hacktricks/blob/e4c7b21b8f36c97c35b7c622732b38a189ce18f7/src/windows-hardening/windows-local-privilege-escalation/privilege-escalation-with-autorun-binaries.md

## Metadata
- **Author:** Victor Sergeev, Daniil Yugoslavskiy, oscd.community, Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2019-10-25
- **Rule ID:** `24357373-078f-44ed-9ac4-6d334a668a11`
- **Source file:** `windows/process_creation/proc_creation_win_reg_direct_asep_registry_keys_modification.yml`

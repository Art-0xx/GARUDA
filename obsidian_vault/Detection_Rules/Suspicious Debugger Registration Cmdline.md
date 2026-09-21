---
type: detection_rule
title: "Suspicious Debugger Registration Cmdline"
rule_id: ae215552-081e-44c7-805f-be16f975c8a2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.008]
---

# Suspicious Debugger Registration Cmdline

## Description
Detects the registration of a debugger for a program that is available in the logon screen (sticky key backdoor).

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection1:
  CommandLine|contains: \CurrentVersion\Image File Execution Options\
selection2:
  CommandLine|contains:
  - sethc.exe
  - utilman.exe
  - osk.exe
  - magnify.exe
  - narrator.exe
  - displayswitch.exe
  - atbroker.exe
  - HelpPane.exe
```

## MITRE ATT&CK
- T1546.008

## False Positives
- Unknown

## References
- https://blogs.technet.microsoft.com/jonathantrull/2016/10/03/detecting-sticky-key-backdoors/
- https://bazaar.abuse.ch/sample/6f3aa9362d72e806490a8abce245331030d1ab5ac77e400dd475748236a6cc81/

## Metadata
- **Author:** Florian Roth (Nextron Systems), oscd.community, Jonhnathan Ribeiro
- **Date:** 2019-09-06
- **Rule ID:** `ae215552-081e-44c7-805f-be16f975c8a2`
- **Source file:** `windows/process_creation/proc_creation_win_registry_install_reg_debugger_backdoor.yml`

---
type: detection_rule
title: "Sticky Key Like Backdoor Execution"
rule_id: 2fdefcb3-dbda-401e-ae23-f0db027628bc
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.008]
---

# Sticky Key Like Backdoor Execution

## Description
Detects the usage and installation of a backdoor that uses an option to register a malicious debugger for built-in tools that are accessible in the login screen

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
  - sethc.exe
  - utilman.exe
  - osk.exe
  - Magnify.exe
  - Narrator.exe
  - DisplaySwitch.exe
  Image|endswith:
  - \cmd.exe
  - \cscript.exe
  - \mshta.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
  - \wt.exe
  ParentImage|endswith: \winlogon.exe
```

## MITRE ATT&CK
- T1546.008

## False Positives
- Unlikely

## References
- https://learn.microsoft.com/en-us/archive/blogs/jonathantrull/detecting-sticky-key-backdoors

## Metadata
- **Author:** Florian Roth (Nextron Systems), @twjackomo, Jonhnathan Ribeiro, oscd.community
- **Date:** 2018-03-15
- **Rule ID:** `2fdefcb3-dbda-401e-ae23-f0db027628bc`
- **Source file:** `windows/process_creation/proc_creation_win_cmd_sticky_key_like_backdoor_execution.yml`

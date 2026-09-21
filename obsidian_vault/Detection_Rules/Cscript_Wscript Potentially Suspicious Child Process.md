---
type: detection_rule
title: "Cscript/Wscript Potentially Suspicious Child Process"
rule_id: b6676963-0353-4f88-90f5-36c20d443c6a
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Cscript/Wscript Potentially Suspicious Child Process

## Description
Detects potentially suspicious child processes of Wscript/Cscript. These include processes such as rundll32 with uncommon exports or PowerShell spawning rundll32 or regsvr32.
Malware such as Pikabot and Qakbot were seen using similar techniques as well as many others.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and ( selection_cli_standalone or (selection_cli_script_main
  and 1 of selection_cli_script_option_*) ) and not 1 of filter_main_*
filter_main_rundll32_known_exports:
  CommandLine|contains:
  - UpdatePerUserSystemParameters
  - PrintUIEntry
  - ClearMyTracksByProcess
  Image|endswith: \rundll32.exe
selection_cli_script_main:
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
selection_cli_script_option_mshta:
  CommandLine|contains|all:
  - mshta
  - http
selection_cli_script_option_other:
  CommandLine|contains:
  - rundll32
  - regsvr32
  - msiexec
selection_cli_standalone:
  Image|endswith: \rundll32.exe
selection_parent:
  ParentImage|endswith:
  - \wscript.exe
  - \cscript.exe
```

## False Positives
- Some false positives might occur with admin or third party software scripts. Investigate and apply additional filters accordingly.

## References
- Internal Research
- https://github.com/pr0xylife/Pikabot/blob/fc58126127adf0f65e78f4eec59675523f48f086/Pikabot_30.10.2023.txt
- https://github.com/pr0xylife/Pikabot/blob/fc58126127adf0f65e78f4eec59675523f48f086/Pikabot_22.12.2023.txt

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Alejandro Houspanossian ('@lekz86')
- **Date:** 2023-05-15
- **Rule ID:** `b6676963-0353-4f88-90f5-36c20d443c6a`
- **Source file:** `windows/process_creation/proc_creation_win_wscript_cscript_susp_child_processes.yml`

---
type: detection_rule
title: "Suspicious Child Process of Notepad++ Updater - GUP.Exe"
rule_id: bb0e87ce-c89f-4857-84fa-095e4483e9cb
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1195.002, attack.t1557]
---

# Suspicious Child Process of Notepad++ Updater - GUP.Exe

## Description
Detects suspicious child process creation by the Notepad++ updater process (gup.exe).
This could indicate potential exploitation of the updater component to deliver unwanted malware.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_child_*
selection_child_cli:
  CommandLine|contains:
  - bitsadmin
  - certutil
  - curl
  - finger
  - forfiles
  - regsvr32
  - rundll32
  - wget
selection_child_img:
  Image|endswith:
  - \cmd.exe
  - \powershell.exe
  - \pwsh.exe
  - \cscript.exe
  - \wscript.exe
  - \mshta.exe
selection_parent:
  ParentImage|endswith: \gup.exe
```

## MITRE ATT&CK
- T1195.002
- T1557

## False Positives
- Unlikely

## References
- https://notepad-plus-plus.org/news/v889-released/
- https://www.heise.de/en/news/Notepad-updater-installed-malware-11109726.html
- https://www.rapid7.com/blog/post/tr-chrysalis-backdoor-dive-into-lotus-blossoms-toolkit/
- https://www.validin.com/blog/exploring_notepad_plus_plus_network_indicators/
- https://securelist.com/notepad-supply-chain-attack/118708/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2026-02-03
- **Rule ID:** `bb0e87ce-c89f-4857-84fa-095e4483e9cb`
- **Source file:** `windows/process_creation/proc_creation_win_gup_susp_child_process.yml`

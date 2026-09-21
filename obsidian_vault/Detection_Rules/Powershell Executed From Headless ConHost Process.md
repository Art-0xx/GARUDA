---
type: detection_rule
title: "Powershell Executed From Headless ConHost Process"
rule_id: 056c7317-9a09-4bd4-9067-d051312752ea
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001, attack.t1059.003, attack.t1564.003]
---

# Powershell Executed From Headless ConHost Process

## Description
Detects the use of powershell commands from headless ConHost window.
The "--headless" flag hides the windows from the user upon execution.

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
  - --headless
  - powershell
selection_img:
- Image|endswith: \conhost.exe
- OriginalFileName: CONHOST.EXE
```

## MITRE ATT&CK
- T1059.001
- T1059.003
- T1564.003

## False Positives
- Unknown

## References
- https://www.huntress.com/blog/fake-browser-updates-lead-to-boinc-volunteer-computing-software

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2024-07-23
- **Rule ID:** `056c7317-9a09-4bd4-9067-d051312752ea`
- **Source file:** `windows/process_creation/proc_creation_win_conhost_headless_powershell.yml`

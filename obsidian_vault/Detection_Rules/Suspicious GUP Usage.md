---
type: detection_rule
title: "Suspicious GUP Usage"
rule_id: 0a4f6091-223b-41f6-8743-f322ec84930b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Suspicious GUP Usage

## Description
Detects execution of the Notepad++ updater in a suspicious directory, which is often used in DLL side-loading attacks

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_*
filter_programfiles:
  Image|endswith:
  - \Program Files\Notepad++\updater\GUP.exe
  - \Program Files (x86)\Notepad++\updater\GUP.exe
filter_user:
  Image|contains: \Users\
  Image|endswith:
  - \AppData\Local\Notepad++\updater\GUP.exe
  - \AppData\Roaming\Notepad++\updater\GUP.exe
selection:
  Image|endswith: \GUP.exe
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Execution of tools named GUP.exe and located in folders different than Notepad++\updater

## References
- https://www.fireeye.com/blog/threat-research/2018/09/apt10-targeting-japanese-corporations-using-updated-ttps.html

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-02-06
- **Rule ID:** `0a4f6091-223b-41f6-8743-f322ec84930b`
- **Source file:** `windows/process_creation/proc_creation_win_gup_suspicious_execution.yml`

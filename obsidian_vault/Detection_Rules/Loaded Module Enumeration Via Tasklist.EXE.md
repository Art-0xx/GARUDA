---
type: detection_rule
title: "Loaded Module Enumeration Via Tasklist.EXE"
rule_id: 34275eb8-fa19-436b-b959-3d9ecd53fa1f
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003]
---

# Loaded Module Enumeration Via Tasklist.EXE

## Description
Detects the enumeration of a specific DLL or EXE being used by a binary via "tasklist.exe".
This is often used by attackers in order to find the specific process identifier (PID) that is using the DLL in question.
In order to dump the process memory or perform other nefarious actions.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_flags:
  CommandLine|contains|windash: -m
selection_img:
- Image|endswith: \tasklist.exe
- OriginalFileName: tasklist.exe
selection_module:
  CommandLine|contains: rdpcorets.dll
```

## MITRE ATT&CK
- T1003

## False Positives
- Unknown

## References
- https://www.n00py.io/2021/05/dumping-plaintext-rdp-credentials-from-svchost-exe/
- https://pentestlab.blog/tag/svchost/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel
- **Date:** 2024-02-12
- **Rule ID:** `34275eb8-fa19-436b-b959-3d9ecd53fa1f`
- **Source file:** `windows/process_creation/proc_creation_win_tasklist_module_enumeration.yml`

---
type: detection_rule
title: "Rundll32 Registered COM Objects"
rule_id: f1edd233-30b5-4823-9e6a-c4171b24d316
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546.015]
---

# Rundll32 Registered COM Objects

## Description
load malicious registered COM objects

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains:
  - '-sta '
  - '-localserver '
  CommandLine|contains|all:
  - '{'
  - '}'
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## MITRE ATT&CK
- T1546.015

## False Positives
- Legitimate use

## References
- https://nasbench.medium.com/a-deep-dive-into-rundll32-exe-642344b41e90
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1546.015/T1546.015.md

## Metadata
- **Author:** frack113
- **Date:** 2022-02-13
- **Rule ID:** `f1edd233-30b5-4823-9e6a-c4171b24d316`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_registered_com_objects.yml`

---
type: detection_rule
title: "PUA - Radmin Viewer Utility Execution"
rule_id: 5817e76f-4804-41e6-8f1d-5fa0b3ecae2d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1072]
---

# PUA - Radmin Viewer Utility Execution

## Description
Detects the execution of Radmin which can be abused by an adversary to remotely control Windows machines

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Description: Radmin Viewer
- Product: Radmin Viewer
- OriginalFileName: Radmin.exe
```

## MITRE ATT&CK
- T1072

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1072/T1072.md
- https://www.radmin.fr/

## Metadata
- **Author:** frack113
- **Date:** 2022-01-22
- **Rule ID:** `5817e76f-4804-41e6-8f1d-5fa0b3ecae2d`
- **Source file:** `windows/process_creation/proc_creation_win_pua_radmin.yml`

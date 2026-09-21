---
type: detection_rule
title: "Suspicious Execution From Outlook Temporary Folder"
rule_id: a018fdc3-46a3-44e5-9afb-2cd4af1d4b39
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1566.001]
---

# Suspicious Execution From Outlook Temporary Folder

## Description
Detects a suspicious program execution in Outlook temp folder

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|contains: \Temporary Internet Files\Content.Outlook\
```

## MITRE ATT&CK
- T1566.001

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-10-01
- **Rule ID:** `a018fdc3-46a3-44e5-9afb-2cd4af1d4b39`
- **Source file:** `windows/process_creation/proc_creation_win_office_outlook_execution_from_temp.yml`

---
type: detection_rule
title: "Recon Information for Export with Command Prompt"
rule_id: aa2efee7-34dd-446e-8a37-40790a66efd7
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1119]
---

# Recon Information for Export with Command Prompt

## Description
Once established within a system or network, an adversary may use automated techniques for collecting internal data.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_image:
- Image|endswith:
  - \tree.com
  - \WMIC.exe
  - \doskey.exe
  - \sc.exe
- OriginalFileName:
  - wmic.exe
  - DOSKEY.EXE
  - sc.exe
selection_redirect:
  ParentCommandLine|contains:
  - ' > %TEMP%\'
  - ' > %TMP%\'
```

## MITRE ATT&CK
- T1119

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1119/T1119.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-30
- **Rule ID:** `aa2efee7-34dd-446e-8a37-40790a66efd7`
- **Source file:** `windows/process_creation/proc_creation_win_susp_recon.yml`

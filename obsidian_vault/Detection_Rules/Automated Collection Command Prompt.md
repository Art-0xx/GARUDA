---
type: detection_rule
title: "Automated Collection Command Prompt"
rule_id: f576a613-2392-4067-9d1a-9345fb58d8d1
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1119, attack.t1552.001]
---

# Automated Collection Command Prompt

## Description
Once established within a system or network, an adversary may use automated techniques for collecting internal data.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_ext and 1 of selection_other_*
selection_ext:
  CommandLine|contains:
  - .doc
  - .docx
  - .xls
  - .xlsx
  - .ppt
  - .pptx
  - .rtf
  - .pdf
  - .txt
selection_other_dir:
  CommandLine|contains|all:
  - 'dir '
  - ' /b '
  - ' /s '
selection_other_findstr:
  CommandLine|contains:
  - ' /e '
  - ' /si '
  OriginalFileName: FINDSTR.EXE
```

## MITRE ATT&CK
- T1119
- T1552.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1119/T1119.md
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1552.001/T1552.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-28
- **Rule ID:** `f576a613-2392-4067-9d1a-9345fb58d8d1`
- **Source file:** `windows/process_creation/proc_creation_win_susp_automated_collection.yml`

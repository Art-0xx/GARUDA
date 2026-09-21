---
type: detection_rule
title: "HackTool - XORDump Execution"
rule_id: 66e563f9-1cbd-4a22-a957-d8b7c0f44372
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1003.001]
---

# HackTool - XORDump Execution

## Description
Detects suspicious use of XORDump process memory dumping utility

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
- Image|endswith: \xordump.exe
- CommandLine|contains:
  - ' -process lsass.exe '
  - ' -m comsvcs '
  - ' -m dbghelp '
  - ' -m dbgcore '
```

## MITRE ATT&CK
- T1036
- T1003.001

## False Positives
- Another tool that uses the command line switches of XORdump

## References
- https://github.com/audibleblink/xordump

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2022-01-28
- **Rule ID:** `66e563f9-1cbd-4a22-a957-d8b7c0f44372`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_xordump.yml`

---
type: detection_rule
title: "HackTool - RedMimicry Winnti Playbook Execution"
rule_id: 95022b85-ff2a-49fa-939a-d7b8f56eeb9b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1106, attack.t1059.003, attack.t1218.011]
---

# HackTool - RedMimicry Winnti Playbook Execution

## Description
Detects actions caused by the RedMimicry Winnti playbook a automated breach emulations utility

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - gthread-3.6.dll
  - \Windows\Temp\tmp.bat
  - sigcmm-2.4.dll
  Image|endswith:
  - \rundll32.exe
  - \cmd.exe
```

## MITRE ATT&CK
- T1106
- T1059.003
- T1218.011

## False Positives
- Unknown

## References
- https://redmimicry.com/posts/redmimicry-winnti/

## Metadata
- **Author:** Alexander Rausch
- **Date:** 2020-06-24
- **Rule ID:** `95022b85-ff2a-49fa-939a-d7b8f56eeb9b`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_redmimicry_winnti_playbook.yml`

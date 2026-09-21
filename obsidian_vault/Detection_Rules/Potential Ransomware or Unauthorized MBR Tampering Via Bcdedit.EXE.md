---
type: detection_rule
title: "Potential Ransomware or Unauthorized MBR Tampering Via Bcdedit.EXE"
rule_id: c9fbe8e9-119d-40a6-9b59-dd58a5d84429
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070, attack.t1542.003]
---

# Potential Ransomware or Unauthorized MBR Tampering Via Bcdedit.EXE

## Description
Detects potential malicious and unauthorized usage of bcdedit.exe

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
  - delete
  - deletevalue
  - import
  - safeboot
  - network
selection_img:
- Image|endswith: \bcdedit.exe
- OriginalFileName: bcdedit.exe
```

## MITRE ATT&CK
- T1070
- T1542.003

## References
- https://learn.microsoft.com/en-us/windows-hardware/drivers/devtest/bcdedit--set
- https://twitter.com/malwrhunterteam/status/1372536434125512712/photo/2

## Metadata
- **Author:** @neu5ron
- **Date:** 2019-02-07
- **Rule ID:** `c9fbe8e9-119d-40a6-9b59-dd58a5d84429`
- **Source file:** `windows/process_creation/proc_creation_win_bcdedit_susp_execution.yml`

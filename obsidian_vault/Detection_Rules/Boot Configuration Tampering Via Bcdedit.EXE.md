---
type: detection_rule
title: "Boot Configuration Tampering Via Bcdedit.EXE"
rule_id: 1444443e-6757-43e4-9ea4-c8fc705f79a2
platform: windows
level: high
status: stable
tags: [detection, sigma, windows]
mitre_tags: [attack.t1490]
---

# Boot Configuration Tampering Via Bcdedit.EXE

## Description
Detects the use of the bcdedit command to tamper with the boot configuration data. This technique is often times used by malware or attackers as a destructive way before launching ransomware.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
- CommandLine|contains|all:
  - bootstatuspolicy
  - ignoreallfailures
- CommandLine|contains|all:
  - recoveryenabled
  - 'no'
selection_img:
- Image|endswith: \bcdedit.exe
- OriginalFileName: bcdedit.exe
selection_set:
  CommandLine|contains: set
```

## MITRE ATT&CK
- T1490

## False Positives
- Unlikely

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1490/T1490.md
- https://eqllib.readthedocs.io/en/latest/analytics/c4732632-9c1d-4980-9fa8-1d98c93f918e.html

## Metadata
- **Author:** E.M. Anhaus (originally from Atomic Blue Detections, Endgame), oscd.community
- **Date:** 2019-10-24
- **Rule ID:** `1444443e-6757-43e4-9ea4-c8fc705f79a2`
- **Source file:** `windows/process_creation/proc_creation_win_bcdedit_boot_conf_tamper.yml`

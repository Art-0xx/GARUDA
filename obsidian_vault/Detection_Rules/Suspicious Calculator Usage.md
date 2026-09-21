---
type: detection_rule
title: "Suspicious Calculator Usage"
rule_id: 737e618a-a410-49b5-bec3-9e55ff7fbc15
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036]
---

# Suspicious Calculator Usage

## Description
Detects suspicious use of 'calc.exe' with command line parameters or in a suspicious directory, which is likely caused by some PoC or detection evasion.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_1 or ( selection_2 and not filter_main_known_locations )
filter_main_known_locations:
  Image|contains:
  - :\Windows\System32\
  - :\Windows\SysWOW64\
  - :\Windows\WinSxS\
selection_1:
  CommandLine|contains: '\calc.exe '
selection_2:
  Image|endswith: \calc.exe
```

## MITRE ATT&CK
- T1036

## False Positives
- Unknown

## References
- https://twitter.com/ItsReallyNick/status/1094080242686312448

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2019-02-09
- **Rule ID:** `737e618a-a410-49b5-bec3-9e55ff7fbc15`
- **Source file:** `windows/process_creation/proc_creation_win_calc_uncommon_exec.yml`

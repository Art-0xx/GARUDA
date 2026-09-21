---
type: detection_rule
title: "Changing Existing Service ImagePath Value Via Reg.EXE"
rule_id: 9b0b7ac3-6223-47aa-a3fd-e8f211e637db
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.011]
---

# Changing Existing Service ImagePath Value Via Reg.EXE

## Description
Adversaries may execute their own malicious payloads by hijacking the Registry entries used by services.
Adversaries may use flaws in the permissions for registry to redirect from the originally specified executable to one that they control, in order to launch their own code at Service start.
Windows stores local service configuration information in the Registry under HKLM\SYSTEM\CurrentControlSet\Services

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection:
  CommandLine|contains|all:
  - 'add '
  - SYSTEM\CurrentControlSet\Services\
  - ' ImagePath '
  Image|endswith: \reg.exe
selection_value:
  CommandLine|contains|windash: ' -d '
```

## MITRE ATT&CK
- T1574.011

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1574.011/T1574.011.md#atomic-test-2---service-imagepath-change-with-regexe

## Metadata
- **Author:** frack113
- **Date:** 2021-12-30
- **Rule ID:** `9b0b7ac3-6223-47aa-a3fd-e8f211e637db`
- **Source file:** `windows/process_creation/proc_creation_win_reg_service_imagepath_change.yml`

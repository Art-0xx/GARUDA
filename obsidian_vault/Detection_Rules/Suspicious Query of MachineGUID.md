---
type: detection_rule
title: "Suspicious Query of MachineGUID"
rule_id: f5240972-3938-4e56-8e4b-e33893176c1f
platform: windows
level: low
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082]
---

# Suspicious Query of MachineGUID

## Description
Use of reg to get MachineGuid information

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains|all:
  - SOFTWARE\Microsoft\Cryptography
  - '/v '
  - MachineGuid
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1082

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1082/T1082.md#atomic-test-8---windows-machineguid-discovery

## Metadata
- **Author:** frack113
- **Date:** 2022-01-01
- **Rule ID:** `f5240972-3938-4e56-8e4b-e33893176c1f`
- **Source file:** `windows/process_creation/proc_creation_win_reg_machineguid.yml`

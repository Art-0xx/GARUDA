---
type: detection_rule
title: "Execute From Alternate Data Streams"
rule_id: 7f43c430-5001-4f8b-aaa9-c3b88f18fa5c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Execute From Alternate Data Streams

## Description
Detects execution from an Alternate Data Stream (ADS). Adversaries may use NTFS file attributes to hide their malicious data in order to evade detection

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_stream and (1 of selection_tools_*)
selection_stream:
  CommandLine|contains: 'txt:'
selection_tools_esentutl:
  CommandLine|contains|all:
  - 'esentutl '
  - ' /y '
  - ' /d '
  - ' /o '
selection_tools_makecab:
  CommandLine|contains|all:
  - 'makecab '
  - .cab
selection_tools_reg:
  CommandLine|contains|all:
  - 'reg '
  - ' export '
selection_tools_regedit:
  CommandLine|contains|all:
  - 'regedit '
  - ' /E '
selection_tools_type:
  CommandLine|contains|all:
  - 'type '
  - ' > '
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1564.004/T1564.004.md

## Metadata
- **Author:** frack113
- **Date:** 2021-09-01
- **Rule ID:** `7f43c430-5001-4f8b-aaa9-c3b88f18fa5c`
- **Source file:** `windows/process_creation/proc_creation_win_susp_alternate_data_streams.yml`

---
type: detection_rule
title: "XSL Script Execution Via WMIC.EXE"
rule_id: 05c36dd6-79d6-4a9a-97da-3db20298ab2d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1220, attack.t1059.005, attack.t1059.007]
---

# XSL Script Execution Via WMIC.EXE

## Description
Detects the execution of WMIC with the "format" flag to potentially load local XSL files.
Adversaries abuse this functionality to execute arbitrary files while potentially bypassing application whitelisting defenses.
Extensible Stylesheet Language (XSL) files are commonly used to describe the processing and rendering of data within XML files.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_known_format:
  CommandLine|contains:
  - Format:List
  - Format:htable
  - Format:hform
  - Format:table
  - Format:mof
  - Format:value
  - Format:rawxml
  - Format:xml
  - Format:csv
filter_main_remote_operation:
  CommandLine|contains:
  - ://
  - \\\\
selection_cmd:
  CommandLine|contains|windash: '-format:'
selection_img:
- Image|endswith: \wmic.exe
- OriginalFileName: wmic.exe
- Hashes|contains:
  - IMPHASH=1B1A3F43BF37B5BFE60751F2EE2F326E
  - IMPHASH=37777A96245A3C74EB217308F3546F4C
  - IMPHASH=9D87C9D67CE724033C0B40CC4CA1B206
  - IMPHASH=B12619881D79C3ACADF45E752A58554A
  - IMPHASH=16A48C3CABF98A9DC1BF02C07FE1EA00
```

## MITRE ATT&CK
- T1047
- T1220
- T1059.005
- T1059.007

## False Positives
- WMIC.exe FP depend on scripts and administrative methods used in the monitored environment.
- Static format arguments - https://petri.com/command-line-wmi-part-3

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1220/T1220.md

## Metadata
- **Author:** Timur Zinniatullin, oscd.community, Swachchhanda Shrawan Poudel
- **Date:** 2019-10-21
- **Rule ID:** `05c36dd6-79d6-4a9a-97da-3db20298ab2d`
- **Source file:** `windows/process_creation/proc_creation_win_wmic_xsl_script_processing.yml`

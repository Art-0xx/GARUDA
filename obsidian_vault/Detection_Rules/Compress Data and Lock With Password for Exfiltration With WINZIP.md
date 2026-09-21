---
type: detection_rule
title: "Compress Data and Lock With Password for Exfiltration With WINZIP"
rule_id: e2e80da2-8c66-4e00-ae3c-2eebd29f6b6d
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1560.001]
---

# Compress Data and Lock With Password for Exfiltration With WINZIP

## Description
An adversary may compress or encrypt data that is collected prior to exfiltration using 3rd party utilities

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_other:
  CommandLine|contains:
  - ' -min '
  - ' -a '
selection_password:
  CommandLine|contains: -s"
selection_winzip:
  CommandLine|contains:
  - winzip.exe
  - winzip64.exe
```

## MITRE ATT&CK
- T1560.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1560.001/T1560.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-27
- **Rule ID:** `e2e80da2-8c66-4e00-ae3c-2eebd29f6b6d`
- **Source file:** `windows/process_creation/proc_creation_win_winzip_password_compression.yml`

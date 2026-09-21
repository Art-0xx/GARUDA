---
type: detection_rule
title: "Suspicious Diantz Alternate Data Stream Execution"
rule_id: 6b369ced-4b1d-48f1-b427-fdc0de0790bd
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Suspicious Diantz Alternate Data Stream Execution

## Description
Compress target file into a cab file stored in the Alternate Data Stream (ADS) of the target file.

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
  - diantz.exe
  - .cab
  CommandLine|re: :[^\\]
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Very Possible

## References
- https://lolbas-project.github.io/lolbas/Binaries/Diantz/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-26
- **Rule ID:** `6b369ced-4b1d-48f1-b427-fdc0de0790bd`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_diantz_ads.yml`

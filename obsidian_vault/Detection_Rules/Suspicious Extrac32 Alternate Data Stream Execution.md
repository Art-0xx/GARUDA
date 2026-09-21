---
type: detection_rule
title: "Suspicious Extrac32 Alternate Data Stream Execution"
rule_id: 4b13db67-0c45-40f1-aba8-66a1a7198a1e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.004]
---

# Suspicious Extrac32 Alternate Data Stream Execution

## Description
Extract data from cab file and hide it in an alternate data stream

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
  - extrac32.exe
  - .cab
  CommandLine|re: :[^\\]
```

## MITRE ATT&CK
- T1564.004

## False Positives
- Unknown

## References
- https://lolbas-project.github.io/lolbas/Binaries/Extrac32/

## Metadata
- **Author:** frack113
- **Date:** 2021-11-26
- **Rule ID:** `4b13db67-0c45-40f1-aba8-66a1a7198a1e`
- **Source file:** `windows/process_creation/proc_creation_win_lolbin_extrac32_ads.yml`

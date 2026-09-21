---
type: detection_rule
title: "Suspicious Splwow64 Without Params"
rule_id: 1f1a8509-2cbb-44f5-8751-8e1571518ce2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1202]
---

# Suspicious Splwow64 Without Params

## Description
Detects suspicious Splwow64.exe process without any command line parameters

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|endswith: splwow64.exe
  Image|endswith: \splwow64.exe
```

## MITRE ATT&CK
- T1202

## False Positives
- Unknown

## References
- https://twitter.com/sbousseaden/status/1429401053229891590?s=12

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-08-23
- **Rule ID:** `1f1a8509-2cbb-44f5-8751-8e1571518ce2`
- **Source file:** `windows/process_creation/proc_creation_win_splwow64_cli_anomaly.yml`

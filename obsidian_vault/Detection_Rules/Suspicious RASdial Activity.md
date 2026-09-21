---
type: detection_rule
title: "Suspicious RASdial Activity"
rule_id: 6bba49bf-7f8c-47d6-a1bb-6b4dece4640e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059]
---

# Suspicious RASdial Activity

## Description
Detects suspicious process related to rasdial.exe

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  Image|endswith: rasdial.exe
```

## MITRE ATT&CK
- T1059

## False Positives
- False positives depend on scripts and administrative tools used in the monitored environment

## References
- https://twitter.com/subTee/status/891298217907830785

## Metadata
- **Author:** juju4
- **Date:** 2019-01-16
- **Rule ID:** `6bba49bf-7f8c-47d6-a1bb-6b4dece4640e`
- **Source file:** `windows/process_creation/proc_creation_win_rasdial_execution.yml`

---
type: detection_rule
title: "Suspicious SYSVOL Domain Group Policy Access"
rule_id: 05f3c945-dcc8-4393-9f3d-af65077a8f86
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.006]
---

# Suspicious SYSVOL Domain Group Policy Access

## Description
Detects Access to Domain Group Policies stored in SYSVOL

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
  - \SYSVOL\
  - \policies\
```

## MITRE ATT&CK
- T1552.006

## False Positives
- Administrative activity

## References
- https://adsecurity.org/?p=2288
- https://www.hybrid-analysis.com/sample/f2943f5e45befa52fb12748ca7171d30096e1d4fc3c365561497c618341299d5?environmentId=100

## Metadata
- **Author:** Markus Neis, Jonhnathan Ribeiro, oscd.community
- **Date:** 2018-04-09
- **Rule ID:** `05f3c945-dcc8-4393-9f3d-af65077a8f86`
- **Source file:** `windows/process_creation/proc_creation_win_susp_sysvol_access.yml`

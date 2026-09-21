---
type: detection_rule
title: "Detected Windows Software Discovery"
rule_id: e13f668e-7f95-443d-98d2-1816a7648a7b
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1518]
---

# Detected Windows Software Discovery

## Description
Adversaries may attempt to enumerate software for a variety of reasons, such as figuring out what security measures are present or if the compromised system has a version of software that is vulnerable.

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
  - query
  - \software\
  - /v
  - svcversion
  Image|endswith: \reg.exe
```

## MITRE ATT&CK
- T1518

## False Positives
- Legitimate administration activities

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1518/T1518.md
- https://github.com/harleyQu1nn/AggressorScripts

## Metadata
- **Author:** Nikita Nazarov, oscd.community
- **Date:** 2020-10-16
- **Rule ID:** `e13f668e-7f95-443d-98d2-1816a7648a7b`
- **Source file:** `windows/process_creation/proc_creation_win_reg_software_discovery.yml`

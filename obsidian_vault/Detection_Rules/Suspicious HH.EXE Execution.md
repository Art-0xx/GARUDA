---
type: detection_rule
title: "Suspicious HH.EXE Execution"
rule_id: e8a95b5e-c891-46e2-b33a-93937d3abc31
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1047, attack.t1059.001, attack.t1059.003, attack.t1059.005, attack.t1059.007, attack.t1218, attack.t1218.001, attack.t1218.010, attack.t1218.011, attack.t1566, attack.t1566.001]
---

# Suspicious HH.EXE Execution

## Description
Detects a suspicious execution of a Microsoft HTML Help (HH.exe)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_img:
- OriginalFileName: HH.exe
- Image|endswith: \hh.exe
selection_paths:
  CommandLine|contains:
  - .application
  - \AppData\Local\Temp\
  - \Content.Outlook\
  - \Downloads\
  - \Users\Public\
  - \Windows\Temp\
```

## MITRE ATT&CK
- T1047
- T1059.001
- T1059.003
- T1059.005
- T1059.007
- T1218
- T1218.001
- T1218.010
- T1218.011
- T1566
- T1566.001

## False Positives
- Unknown

## References
- https://www.trustwave.com/en-us/resources/blogs/spiderlabs-blog/chm-badness-delivers-a-banking-trojan/
- https://github.com/elastic/protections-artifacts/commit/746086721fd385d9f5c6647cada1788db4aea95f#diff-27939090904026cc396b0b629c8e4314acd6f5dac40a676edbc87f4567b47eb7
- https://www.ptsecurity.com/ww-en/analytics/pt-esc-threat-intelligence/higaisa-or-winnti-apt-41-backdoors-old-and-new/
- https://www.zscaler.com/blogs/security-research/unintentional-leak-glimpse-attack-vectors-apt37

## Metadata
- **Author:** Maxim Pavlunin
- **Date:** 2020-04-01
- **Rule ID:** `e8a95b5e-c891-46e2-b33a-93937d3abc31`
- **Source file:** `windows/process_creation/proc_creation_win_hh_susp_execution.yml`

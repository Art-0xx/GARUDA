---
type: detection_rule
title: "Add SafeBoot Keys Via Reg Utility"
rule_id: d7662ff6-9e97-4596-a61d-9839e32dee8d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Add SafeBoot Keys Via Reg Utility

## Description
Detects execution of "reg.exe" commands with the "add" or "copy" flags on safe boot registry keys. Often used by attacker to allow the ransomware to work in safe mode as some security products do not

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection*
selection_flag:
  CommandLine|contains:
  - ' copy '
  - ' add '
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_safeboot:
  CommandLine|contains: \SYSTEM\CurrentControlSet\Control\SafeBoot
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://redacted.com/blog/bianlian-ransomware-gang-gives-it-a-go/

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-02
- **Rule ID:** `d7662ff6-9e97-4596-a61d-9839e32dee8d`
- **Source file:** `windows/process_creation/proc_creation_win_reg_add_safeboot.yml`

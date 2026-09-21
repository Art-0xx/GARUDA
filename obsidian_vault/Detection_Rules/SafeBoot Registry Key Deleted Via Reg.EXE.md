---
type: detection_rule
title: "SafeBoot Registry Key Deleted Via Reg.EXE"
rule_id: fc0e89b5-adb0-43c1-b749-c12a10ec37de
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# SafeBoot Registry Key Deleted Via Reg.EXE

## Description
Detects execution of "reg.exe" commands with the "delete" flag on safe boot registry keys. Often used by attacker to prevent safeboot execution of security products

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_delete:
  CommandLine|contains|all:
  - ' delete '
  - \SYSTEM\CurrentControlSet\Control\SafeBoot
selection_img:
- Image|endswith: reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://www.trendmicro.com/en_us/research/22/e/avoslocker-ransomware-variant-abuses-driver-file-to-disable-anti-Virus-scans-log4shell.html

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems), Tim Shelton
- **Date:** 2022-08-08
- **Rule ID:** `fc0e89b5-adb0-43c1-b749-c12a10ec37de`
- **Source file:** `windows/process_creation/proc_creation_win_reg_delete_safeboot.yml`

---
type: detection_rule
title: "Service Registry Key Deleted Via Reg.EXE"
rule_id: 05b2aa93-1210-42c8-8d9a-2fcc13b284f5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Service Registry Key Deleted Via Reg.EXE

## Description
Detects execution of "reg.exe" commands with the "delete" flag on services registry key. Often used by attacker to remove AV software services

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_delete:
  CommandLine|contains: ' delete '
selection_img:
- Image|endswith: reg.exe
- OriginalFileName: reg.exe
selection_key:
  CommandLine|contains: \SYSTEM\CurrentControlSet\services\
```

## MITRE ATT&CK
- T1685

## False Positives
- Unlikely

## References
- https://www.virustotal.com/gui/file/2bcd5702a7565952c44075ac6fb946c7780526640d1264f692c7664c02c68465

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-01
- **Rule ID:** `05b2aa93-1210-42c8-8d9a-2fcc13b284f5`
- **Source file:** `windows/process_creation/proc_creation_win_reg_delete_services.yml`

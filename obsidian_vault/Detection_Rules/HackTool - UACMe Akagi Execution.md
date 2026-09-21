---
type: detection_rule
title: "HackTool - UACMe Akagi Execution"
rule_id: d38d2fa4-98e6-4a24-aff1-410b0c9ad177
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1548.002]
---

# HackTool - UACMe Akagi Execution

## Description
Detects the execution of UACMe, a tool used for UAC bypasses, via default PE metadata

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_hashes_sysmon:
  Hashes|contains:
  - IMPHASH=767637C23BB42CD5D7397CF58B0BE688
  - IMPHASH=14C4E4C72BA075E9069EE67F39188AD8
  - IMPHASH=3C782813D4AFCE07BBFC5A9772ACDBDC
  - IMPHASH=7D010C6BB6A3726F327F7E239166D127
  - IMPHASH=89159BA4DD04E4CE5559F132A9964EB3
  - IMPHASH=6F33F4A5FC42B8CEC7314947BD13F30F
  - IMPHASH=5834ED4291BDEB928270428EBBAF7604
  - IMPHASH=5A8A8A43F25485E7EE1B201EDCBC7A38
  - IMPHASH=DC7D30B90B2D8ABF664FBED2B1B59894
  - IMPHASH=41923EA1F824FE63EA5BEB84DB7A3E74
  - IMPHASH=3DE09703C8E79ED2CA3F01074719906B
selection_img:
  Image|endswith:
  - \Akagi64.exe
  - \Akagi.exe
selection_pe:
- Product: UACMe
- Company:
  - REvol Corp
  - APT 92
  - UG North
  - Hazardous Environments
  - CD Project Rekt
- Description:
  - UACMe main module
  - Pentesting utility
- OriginalFileName:
  - Akagi.exe
  - Akagi64.exe
```

## MITRE ATT&CK
- T1548.002

## False Positives
- Unknown

## References
- https://github.com/hfiref0x/UACME

## Metadata
- **Author:** Christian Burkard (Nextron Systems), Florian Roth (Nextron Systems)
- **Date:** 2021-08-30
- **Rule ID:** `d38d2fa4-98e6-4a24-aff1-410b0c9ad177`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_uacme.yml`

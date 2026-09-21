---
type: detection_rule
title: "HackTool - WSASS Execution"
rule_id: 589ac73f-8e12-409c-964e-31a2f5775ae2
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1003.001]
---

# HackTool - WSASS Execution

## Description
Detects execution of WSASS, a tool used to dump LSASS memory on Windows systems by leveraging WER's
(Windows Error Reporting) WerFaultSecure.EXE to bypass PPL (Protected Process Light) protections.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_cli:
  CommandLine|re: (?i)\.exe[\"\']?\s+[^\"]{0,64}werfaultsecure\.exe[\"\']?\s+\d{2,10}
selection_hash:
  Hashes|contains: IMPHASH=32F5095C9BBDCACF28FD4060EB4DFC42
selection_img:
  Image|endswith: \wsass.exe
```

## MITRE ATT&CK
- T1003.001

## False Positives
- Unlikely

## References
- https://github.com/TwoSevenOneT/WSASS
- https://www.zerosalarium.com/2025/09/Dumping-LSASS-With-WER-On-Modern-Windows-11.html

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-11-23
- **Rule ID:** `589ac73f-8e12-409c-964e-31a2f5775ae2`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_wsass.yml`

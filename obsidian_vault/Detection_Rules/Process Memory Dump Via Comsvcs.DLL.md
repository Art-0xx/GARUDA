---
type: detection_rule
title: "Process Memory Dump Via Comsvcs.DLL"
rule_id: 646ea171-dded-4578-8a4d-65e9822892e3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1036, attack.t1003.001]
---

# Process Memory Dump Via Comsvcs.DLL

## Description
Detects a process memory dump via "comsvcs.dll" using rundll32, covering multiple different techniques (ordinal, minidump function, etc.)

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: (selection_img and 1 of selection_cli_*) or selection_generic
selection_cli_1:
  CommandLine|contains:
  - '#-'
  - '#+'
  - '#24'
  - '24 '
  - MiniDump
  - '#65560'
  CommandLine|contains|all:
  - comsvcs
  - full
selection_generic:
  CommandLine|contains:
  - ' #'
  - ',#'
  - ', #'
  - '"#'
  CommandLine|contains|all:
  - '24'
  - comsvcs
  - full
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
- CommandLine|contains: rundll32
```

## MITRE ATT&CK
- T1036
- T1003.001

## False Positives
- Unlikely

## References
- https://twitter.com/shantanukhande/status/1229348874298388484
- https://twitter.com/pythonresponder/status/1385064506049630211?s=21
- https://twitter.com/Hexacorn/status/1224848930795552769
- https://modexp.wordpress.com/2019/08/30/minidumpwritedump-via-com-services-dll/
- https://twitter.com/SBousseaden/status/1167417096374050817

## Metadata
- **Author:** Florian Roth (Nextron Systems), Modexp, Nasreddine Bencherchali (Nextron Systems), Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2020-02-18
- **Rule ID:** `646ea171-dded-4578-8a4d-65e9822892e3`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_process_dump_via_comsvcs.yml`

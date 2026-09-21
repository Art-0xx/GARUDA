---
type: detection_rule
title: "HackTool - PCHunter Execution"
rule_id: fca949cc-79ca-446e-8064-01aa7e52ece5
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082, attack.t1057, attack.t1012, attack.t1083, attack.t1007]
---

# HackTool - PCHunter Execution

## Description
Detects suspicious use of PCHunter, a tool like Process Hacker to view and manipulate processes, kernel options and other low level stuff

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_*
selection_hashes:
  Hashes|contains:
  - SHA1=5F1CBC3D99558307BC1250D084FA968521482025
  - MD5=987B65CD9B9F4E9A1AFD8F8B48CF64A7
  - SHA256=2B214BDDAAB130C274DE6204AF6DBA5AEEC7433DA99AA950022FA306421A6D32
  - IMPHASH=444D210CEA1FF8112F256A4997EED7FF
  - SHA1=3FB89787CB97D902780DA080545584D97FB1C2EB
  - MD5=228DD0C2E6287547E26FFBD973A40F14
  - SHA256=55F041BF4E78E9BFA6D4EE68BE40E496CE3A1353E1CA4306598589E19802522C
  - IMPHASH=0479F44DF47CFA2EF1CCC4416A538663
selection_image:
  Image|endswith:
  - \PCHunter64.exe
  - \PCHunter32.exe
selection_pe:
- OriginalFileName: PCHunter.exe
- Description: Epoolsoft Windows Information View Tools
```

## MITRE ATT&CK
- T1082
- T1057
- T1012
- T1083
- T1007

## False Positives
- Unlikely

## References
- https://web.archive.org/web/20231210115125/http://www.xuetr.com/
- https://www.crowdstrike.com/blog/falcon-overwatch-report-finds-increase-in-ecrime/
- https://www.hexacorn.com/blog/2018/04/20/kernel-hacking-tool-you-might-have-never-heard-of-xuetr-pchunter/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali
- **Date:** 2022-10-10
- **Rule ID:** `fca949cc-79ca-446e-8064-01aa7e52ece5`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_pchunter.yml`

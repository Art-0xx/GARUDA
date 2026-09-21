---
type: detection_rule
title: "Suspicious Advpack Call Via Rundll32.EXE"
rule_id: a1473adb-5338-4a20-b4c3-126763e2d3d3
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Advpack Call Via Rundll32.EXE

## Description
Detects execution of "rundll32" calling "advpack.dll" with potential obfuscated ordinal calls in order to leverage the "RegisterOCX" function

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_dll:
  CommandLine|contains: advpack
selection_cli_ordinal:
- CommandLine|contains|all:
  - '#+'
  - '12'
- CommandLine|contains: '#-'
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
- CommandLine|contains: rundll32
```

## False Positives
- Unlikely

## References
- https://twitter.com/Hexacorn/status/1224848930795552769
- http://www.hexacorn.com/blog/2020/02/05/stay-positive-lolbins-not/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-05-17
- **Rule ID:** `a1473adb-5338-4a20-b4c3-126763e2d3d3`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_advpack_obfuscated_ordinal_call.yml`

---
type: detection_rule
title: "HackTool - F-Secure C3 Load by Rundll32"
rule_id: b18c9d4c-fac9-4708-bd06-dd5bfacf200f
platform: windows
level: critical
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1218.011]
---

# HackTool - F-Secure C3 Load by Rundll32

## Description
F-Secure C3 produces DLLs with a default exported StartNodeRelay function.

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
  - rundll32.exe
  - .dll
  - StartNodeRelay
```

## MITRE ATT&CK
- T1218.011

## False Positives
- Unknown

## References
- https://github.com/FSecureLABS/C3/blob/11a081fd3be2aaf2a879f6b6e9a96ecdd24966ef/Src/NodeRelayDll/NodeRelayDll.cpp#L12

## Metadata
- **Author:** Alfie Champion (ajpc500)
- **Date:** 2021-06-02
- **Rule ID:** `b18c9d4c-fac9-4708-bd06-dd5bfacf200f`
- **Source file:** `windows/process_creation/proc_creation_win_hktl_c3_rundll32_pattern.yml`

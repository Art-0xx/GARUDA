---
type: detection_rule
title: "HackTool - CACTUSTORCH Remote Thread Creation"
rule_id: 2e4e488a-6164-4811-9ea1-f960c7359c40
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1055.012, attack.t1059.005, attack.t1059.007, attack.t1218.005]
---

# HackTool - CACTUSTORCH Remote Thread Creation

## Description
Detects remote thread creation from CACTUSTORCH as described in references.

## Log Source
```yaml
category: create_remote_thread
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  SourceImage|endswith:
  - \System32\cscript.exe
  - \System32\wscript.exe
  - \System32\mshta.exe
  - \winword.exe
  - \excel.exe
  StartModule: null
  TargetImage|contains: \SysWOW64\
```

## MITRE ATT&CK
- T1055.012
- T1059.005
- T1059.007
- T1218.005

## False Positives
- Unknown

## References
- https://twitter.com/SBousseaden/status/1090588499517079552
- https://github.com/mdsecactivebreach/CACTUSTORCH

## Metadata
- **Author:** @SBousseaden (detection), Thomas Patzke (rule)
- **Date:** 2019-02-01
- **Rule ID:** `2e4e488a-6164-4811-9ea1-f960c7359c40`
- **Source file:** `windows/create_remote_thread/create_remote_thread_win_hktl_cactustorch.yml`

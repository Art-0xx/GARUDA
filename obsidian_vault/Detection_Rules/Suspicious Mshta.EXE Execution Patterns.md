---
type: detection_rule
title: "Suspicious Mshta.EXE Execution Patterns"
rule_id: e32f92d1-523e-49c3-9374-bdb13b46a3ba
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1106]
---

# Suspicious Mshta.EXE Execution Patterns

## Description
Detects suspicious mshta process execution patterns

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* or (selection_img and not filter_img)
filter_img:
- Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
- CommandLine|contains:
  - .htm
  - .hta
- CommandLine|endswith:
  - mshta.exe
  - mshta
selection_img:
- Image|endswith: \mshta.exe
- OriginalFileName: MSHTA.EXE
selection_susp:
  CommandLine|contains:
  - \AppData\Local\
  - C:\ProgramData\
  - C:\Users\Public\
  - C:\Windows\Temp\
  ParentImage|endswith:
  - \cmd.exe
  - \cscript.exe
  - \powershell.exe
  - \pwsh.exe
  - \regsvr32.exe
  - \rundll32.exe
  - \wscript.exe
```

## MITRE ATT&CK
- T1106

## False Positives
- Unknown

## References
- https://en.wikipedia.org/wiki/HTML_Application
- https://www.echotrail.io/insights/search/mshta.exe
- https://app.any.run/tasks/34221348-072d-4b70-93f3-aa71f6ebecad/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2021-07-17
- **Rule ID:** `e32f92d1-523e-49c3-9374-bdb13b46a3ba`
- **Source file:** `windows/process_creation/proc_creation_win_mshta_susp_pattern.yml`

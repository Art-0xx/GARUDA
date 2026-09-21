---
type: detection_rule
title: "Potential ShellDispatch.DLL Functionality Abuse"
rule_id: 82343930-652f-43f5-ab70-2ee9fdd6d5e9
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
---

# Potential ShellDispatch.DLL Functionality Abuse

## Description
Detects potential "ShellDispatch.dll" functionality abuse to execute arbitrary binaries via "ShellExecute"

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli:
  CommandLine|contains: RunDll_ShellExecuteW
selection_img:
- Image|endswith: \rundll32.exe
- OriginalFileName: RUNDLL32.EXE
```

## False Positives
- Unlikely

## References
- https://www.hexacorn.com/blog/2023/06/07/this-lolbin-doesnt-exist/

## Metadata
- **Author:** X__Junior (Nextron Systems)
- **Date:** 2023-06-20
- **Rule ID:** `82343930-652f-43f5-ab70-2ee9fdd6d5e9`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_shelldispatch_potential_abuse.yml`

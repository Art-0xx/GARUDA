---
type: detection_rule
title: "Setup16.EXE Execution With Custom .Lst File"
rule_id: 99c8be4f-3087-4f9f-9c24-8c7e257b442e
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.005]
---

# Setup16.EXE Execution With Custom .Lst File

## Description
Detects the execution of "Setup16.EXE" and old installation utility with a custom ".lst" file.
These ".lst" file can contain references to external program that "Setup16.EXE" will execute.
Attackers and adversaries might leverage this as a living of the land utility.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_optional_*
filter_optional_valid_path:
  Image|startswith: C:\~MSSETUP.T\
selection:
  ParentCommandLine|contains: ' -m '
  ParentImage: C:\Windows\SysWOW64\setup16.exe
```

## MITRE ATT&CK
- T1574.005

## False Positives
- On modern Windows system, the "Setup16" utility is practically never used, hence false positive should be very rare.

## References
- https://www.hexacorn.com/blog/2024/10/12/the-sweet16-the-oldbin-lolbin-called-setup16-exe/

## Metadata
- **Author:** frack113
- **Date:** 2024-12-01
- **Rule ID:** `99c8be4f-3087-4f9f-9c24-8c7e257b442e`
- **Source file:** `windows/process_creation/proc_creation_win_setup16_custom_lst_execution.yml`

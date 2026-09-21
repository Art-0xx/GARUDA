---
type: detection_rule
title: "Xwizard.EXE Execution From Non-Default Location"
rule_id: 193d5ccd-6f59-40c6-b5b0-8e32d5ddd3d1
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1574.001]
---

# Xwizard.EXE Execution From Non-Default Location

## Description
Detects the execution of Xwizard tool from a non-default directory.
When executed from a non-default directory, this utility can be abused in order to side load a custom version of "xwizards.dll".

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not 1 of filter_main_*
filter_main_legit_location:
  Image|startswith:
  - C:\Windows\System32\
  - C:\Windows\SysWOW64\
  - C:\Windows\WinSxS\
selection:
- Image|endswith: \xwizard.exe
- OriginalFileName: xwizard.exe
```

## MITRE ATT&CK
- T1574.001

## False Positives
- Windows installed on non-C drive

## References
- https://lolbas-project.github.io/lolbas/Binaries/Xwizard/
- http://www.hexacorn.com/blog/2017/07/31/the-wizard-of-x-oppa-plugx-style/

## Metadata
- **Author:** Christian Burkard (Nextron Systems)
- **Date:** 2021-09-20
- **Rule ID:** `193d5ccd-6f59-40c6-b5b0-8e32d5ddd3d1`
- **Source file:** `windows/process_creation/proc_creation_win_xwizard_execution_non_default_location.yml`

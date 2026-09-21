---
type: detection_rule
title: "Suspicious Usage Of ShellExec_RunDLL"
rule_id: d87bd452-6da1-456e-8155-7dc988157b7d
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
---

# Suspicious Usage Of ShellExec_RunDLL

## Description
Detects suspicious usage of the ShellExec_RunDLL function to launch other commands as seen in the the raspberry-robin attack

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_openasrundll:
  CommandLine|contains: ShellExec_RunDLL
selection_suspcli:
  CommandLine|contains:
  - \Desktop\
  - \Temp\
  - \Users\Public\
  - comspec
  - iex
  - Invoke-
  - msiexec
  - odbcconf
  - regsvr32
```

## False Positives
- Unknown

## References
- https://redcanary.com/blog/raspberry-robin/
- https://www.microsoft.com/en-us/security/blog/2022/10/27/raspberry-robin-worm-part-of-larger-ecosystem-facilitating-pre-ransomware-activity/
- https://github.com/SigmaHQ/sigma/issues/1009

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-09-01
- **Rule ID:** `d87bd452-6da1-456e-8155-7dc988157b7d`
- **Source file:** `windows/process_creation/proc_creation_win_rundll32_susp_shellexec_execution.yml`

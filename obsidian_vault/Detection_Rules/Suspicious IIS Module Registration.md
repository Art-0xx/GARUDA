---
type: detection_rule
title: "Suspicious IIS Module Registration"
rule_id: 043c4b8b-3a54-4780-9682-081cb6b8185c
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1505.004]
---

# Suspicious IIS Module Registration

## Description
Detects a suspicious IIS module registration as described in Microsoft threat report on IIS backdoors

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection_parent and 1 of selection_cli_*
selection_cli_1:
  CommandLine|contains: appcmd.exe add module
selection_cli_2:
  CommandLine|contains: ' system.enterpriseservices.internal.publish'
  Image|endswith: \powershell.exe
selection_cli_3:
  CommandLine|contains|all:
  - gacutil
  - ' /I'
selection_parent:
  ParentImage|endswith: \w3wp.exe
```

## MITRE ATT&CK
- T1505.004

## False Positives
- Administrative activity

## References
- https://www.microsoft.com/security/blog/2022/07/26/malicious-iis-extensions-quietly-open-persistent-backdoors-into-servers/

## Metadata
- **Author:** Florian Roth (Nextron Systems), Microsoft (idea)
- **Date:** 2022-08-04
- **Rule ID:** `043c4b8b-3a54-4780-9682-081cb6b8185c`
- **Source file:** `windows/process_creation/proc_creation_win_iis_susp_module_registration.yml`

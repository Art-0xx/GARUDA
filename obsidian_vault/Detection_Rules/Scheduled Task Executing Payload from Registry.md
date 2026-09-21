---
type: detection_rule
title: "Scheduled Task Executing Payload from Registry"
rule_id: 86588b36-c6d3-465f-9cee-8f9093e07798
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1059.001]
---

# Scheduled Task Executing Payload from Registry

## Description
Detects the creation of a schtasks that potentially executes a payload stored in the Windows Registry using PowerShell.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_*
filter_main_encoding:
  CommandLine|contains:
  - FromBase64String
  - encodedcommand
selection_cli_create:
  CommandLine|contains: /Create
selection_cli_get:
  CommandLine|contains:
  - Get-ItemProperty
  - ' gp '
selection_cli_hive:
  CommandLine|contains:
  - 'HKCU:'
  - 'HKLM:'
  - 'registry::'
  - HKEY_
selection_img:
- Image|endswith: \schtasks.exe
- OriginalFileName: schtasks.exe
```

## MITRE ATT&CK
- T1053.005
- T1059.001

## False Positives
- Unknown

## References
- https://thedfirreport.com/2022/02/21/qbot-and-zerologon-lead-to-full-domain-compromise/

## Metadata
- **Author:** X__Junior (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-07-18
- **Rule ID:** `86588b36-c6d3-465f-9cee-8f9093e07798`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_reg_loader.yml`

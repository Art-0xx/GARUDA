---
type: detection_rule
title: "Scheduled Task Executing Encoded Payload from Registry"
rule_id: c4eeeeae-89f4-43a7-8b48-8d1bdfa66c78
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1059.001]
---

# Scheduled Task Executing Encoded Payload from Registry

## Description
Detects the creation of a schtask that potentially executes a base64 encoded payload stored in the Windows Registry using PowerShell.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_create:
  CommandLine|contains: /Create
selection_cli_encoding:
  CommandLine|contains:
  - FromBase64String
  - encodedcommand
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
- Unlikely

## References
- https://thedfirreport.com/2022/02/21/qbot-and-zerologon-lead-to-full-domain-compromise/

## Metadata
- **Author:** pH-T (Nextron Systems), @Kostastsale, TheDFIRReport, X__Junior (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-02-12
- **Rule ID:** `c4eeeeae-89f4-43a7-8b48-8d1bdfa66c78`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_reg_loader_encoded.yml`

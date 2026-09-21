---
type: detection_rule
title: "Suspicious Schtasks Execution AppData Folder"
rule_id: c5c00f49-b3f9-45a6-997e-cfdecc6e1967
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005, attack.t1059.001]
---

# Suspicious Schtasks Execution AppData Folder

## Description
Detects the creation of a schtask that executes a file from C:\Users\<USER>\AppData\Local

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  CommandLine|contains: /TN TVInstallRestore
  Image|endswith: \schtasks.exe
  ParentImage|contains|all:
  - \AppData\Local\Temp\
  - TeamViewer_.exe
selection:
  CommandLine|contains:
  - NT AUT
  - ' SYSTEM '
  CommandLine|contains|all:
  - /Create
  - /RU
  - /TR
  - C:\Users\
  - \AppData\Local\
  Image|endswith: \schtasks.exe
```

## MITRE ATT&CK
- T1053.005
- T1059.001

## False Positives
- Unknown

## References
- https://thedfirreport.com/2022/02/21/qbot-and-zerologon-lead-to-full-domain-compromise/

## Metadata
- **Author:** pH-T (Nextron Systems), Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-03-15
- **Rule ID:** `c5c00f49-b3f9-45a6-997e-cfdecc6e1967`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_appdata_local_system.yml`

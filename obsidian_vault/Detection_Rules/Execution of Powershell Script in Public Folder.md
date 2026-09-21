---
type: detection_rule
title: "Execution of Powershell Script in Public Folder"
rule_id: fb9d3ff7-7348-46ab-af8c-b55f5fbf39b4
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Execution of Powershell Script in Public Folder

## Description
This rule detects execution of PowerShell scripts located in the "C:\Users\Public" folder

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  CommandLine|contains:
  - -f C:\Users\Public
  - -f "C:\Users\Public
  - -f %Public%
  - -fi C:\Users\Public
  - -fi "C:\Users\Public
  - -fi %Public%
  - -fil C:\Users\Public
  - -fil "C:\Users\Public
  - -fil %Public%
  - -file C:\Users\Public
  - -file "C:\Users\Public
  - -file %Public%
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Unlikely

## References
- https://www.mandiant.com/resources/evolution-of-fin7

## Metadata
- **Author:** Max Altgelt (Nextron Systems)
- **Date:** 2022-04-06
- **Rule ID:** `fb9d3ff7-7348-46ab-af8c-b55f5fbf39b4`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_public_folder.yml`

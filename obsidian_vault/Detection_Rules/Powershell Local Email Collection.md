---
type: detection_rule
title: "Powershell Local Email Collection"
rule_id: 2837e152-93c8-43d2-85ba-c3cd3c2ae614
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1114.001]
---

# Powershell Local Email Collection

## Description
Adversaries may target user email on local systems to collect sensitive information.
Files containing email data can be acquired from a users local system, such as Outlook storage or cache files.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  ScriptBlockText|contains:
  - Get-Inbox.ps1
  - Microsoft.Office.Interop.Outlook
  - Microsoft.Office.Interop.Outlook.olDefaultFolders
  - -comobject outlook.application
```

## MITRE ATT&CK
- T1114.001

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1114.001/T1114.001.md

## Metadata
- **Author:** frack113
- **Date:** 2021-07-21
- **Rule ID:** `2837e152-93c8-43d2-85ba-c3cd3c2ae614`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_mail_acces.yml`

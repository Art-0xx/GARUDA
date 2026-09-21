---
type: detection_rule
title: "Suspicious PowerShell WindowStyle Option"
rule_id: 313fbb0a-a341-4682-848d-6d6f8c4fab7c
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1564.003]
---

# Suspicious PowerShell WindowStyle Option

## Description
Adversaries may use hidden windows to conceal malicious activity from the plain sight of users.
In some cases, windows that would typically be displayed when an application carries out an operation can be hidden

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection and not filter
filter:
  ScriptBlockText|contains|all:
  - :\Program Files\Amazon\WorkSpacesConfig\Scripts\
  - $PSScriptRoot\Module\WorkspaceScriptModule\WorkspaceScriptModule
selection:
  ScriptBlockText|contains|all:
  - powershell
  - WindowStyle
  - Hidden
```

## MITRE ATT&CK
- T1564.003

## False Positives
- Unknown

## References
- https://github.com/redcanaryco/atomic-red-team/blob/f339e7da7d05f6057fdfcdd3742bfcf365fee2a9/atomics/T1564.003/T1564.003.md

## Metadata
- **Author:** frack113, Tim Shelton (fp AWS)
- **Date:** 2021-10-20
- **Rule ID:** `313fbb0a-a341-4682-848d-6d6f8c4fab7c`
- **Source file:** `windows/powershell/powershell_script/posh_ps_susp_windowstyle.yml`

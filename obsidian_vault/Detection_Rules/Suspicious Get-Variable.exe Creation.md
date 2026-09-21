---
type: detection_rule
title: "Suspicious Get-Variable.exe Creation"
rule_id: 0c3fac91-5627-46e8-a6a8-a0d7b9b8ae1b
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1546, attack.t1027]
---

# Suspicious Get-Variable.exe Creation

## Description
Get-Variable is a valid PowerShell cmdlet
WindowsApps is by default in the path where PowerShell is executed.
So when the Get-Variable command is issued on PowerShell execution, the system first looks for the Get-Variable executable in the path and executes the malicious binary instead of looking for the PowerShell cmdlet.

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: Local\Microsoft\WindowsApps\Get-Variable.exe
```

## MITRE ATT&CK
- T1546
- T1027

## False Positives
- Unknown

## References
- https://blog.malwarebytes.com/threat-intelligence/2022/04/colibri-loader-combines-task-scheduler-and-powershell-in-clever-persistence-technique/
- https://www.joesandbox.com/analysis/465533/0/html

## Metadata
- **Author:** frack113
- **Date:** 2022-04-23
- **Rule ID:** `0c3fac91-5627-46e8-a6a8-a0d7b9b8ae1b`
- **Source file:** `windows/file/file_event/file_event_win_susp_get_variable.yml`

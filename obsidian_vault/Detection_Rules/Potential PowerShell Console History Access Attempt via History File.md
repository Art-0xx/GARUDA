---
type: detection_rule
title: "Potential PowerShell Console History Access Attempt via History File"
rule_id: f4ff7323-b5fc-4323-8b52-6b9408e15788
platform: windows
level: medium
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1552.001]
---

# Potential PowerShell Console History Access Attempt via History File

## Description
Detects potential access attempts to the PowerShell console history directly via history file (ConsoleHost_history.txt).
This can give access to plaintext passwords used in PowerShell commands or used for general reconnaissance.

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
  - ConsoleHost_history.txt
  - (Get-PSReadLineOption).HistorySavePath
```

## MITRE ATT&CK
- T1552.001

## False Positives
- Legitimate access of the console history file is possible

## References
- https://0xdf.gitlab.io/2018/11/08/powershell-history-file.html

## Metadata
- **Author:** Luc Génaux
- **Date:** 2025-04-03
- **Rule ID:** `f4ff7323-b5fc-4323-8b52-6b9408e15788`
- **Source file:** `windows/process_creation/proc_creation_win_powershell_console_history_file_access.yml`

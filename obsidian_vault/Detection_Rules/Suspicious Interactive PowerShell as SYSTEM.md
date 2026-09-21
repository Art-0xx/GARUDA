---
type: detection_rule
title: "Suspicious Interactive PowerShell as SYSTEM"
rule_id: 5b40a734-99b6-4b98-a1d0-1cea51a08ab2
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1059.001]
---

# Suspicious Interactive PowerShell as SYSTEM

## Description
Detects the creation of files that indicator an interactive use of PowerShell in the SYSTEM user context

## Log Source
```yaml
category: file_event
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename:
  - C:\Windows\System32\config\systemprofile\AppData\Roaming\Microsoft\Windows\PowerShell\PSReadLine\ConsoleHost_history.txt
  - C:\Windows\System32\config\systemprofile\AppData\Local\Microsoft\Windows\PowerShell\StartupProfileData-Interactive
```

## MITRE ATT&CK
- T1059.001

## False Positives
- Administrative activity
- PowerShell scripts running as SYSTEM user

## References
- https://jpcertcc.github.io/ToolAnalysisResultSheet/details/PowerSploit_Invoke-Mimikatz.htm

## Metadata
- **Author:** Florian Roth (Nextron Systems)
- **Date:** 2021-12-07
- **Rule ID:** `5b40a734-99b6-4b98-a1d0-1cea51a08ab2`
- **Source file:** `windows/file/file_event/file_event_win_susp_system_interactive_powershell.yml`

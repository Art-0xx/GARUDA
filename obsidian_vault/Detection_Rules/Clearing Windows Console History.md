---
type: detection_rule
title: "Clearing Windows Console History"
rule_id: bde47d4b-9987-405c-94c7-b080410e8ea7
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070, attack.t1070.003]
---

# Clearing Windows Console History

## Description
Identifies when a user attempts to clear console history. An adversary may clear the command history of a compromised account to conceal the actions undertaken during an intrusion.

## Log Source
```yaml
category: ps_script
definition: 'Requirements: Script Block Logging must be enabled'
product: windows
```

## Detection Logic
```yaml
condition: selection1 or selection2a and selection2b
selection1:
  ScriptBlockText|contains: Clear-History
selection2a:
  ScriptBlockText|contains:
  - Remove-Item
  - rm
selection2b:
  ScriptBlockText|contains:
  - ConsoleHost_history.txt
  - (Get-PSReadlineOption).HistorySavePath
```

## MITRE ATT&CK
- T1070
- T1070.003

## False Positives
- Unknown

## References
- https://stefanos.cloud/blog/kb/how-to-clear-the-powershell-command-history/
- https://www.shellhacks.com/clear-history-powershell/
- https://community.sophos.com/sophos-labs/b/blog/posts/powershell-command-history-forensics

## Metadata
- **Author:** Austin Songer @austinsonger
- **Date:** 2021-11-25
- **Rule ID:** `bde47d4b-9987-405c-94c7-b080410e8ea7`
- **Source file:** `windows/powershell/powershell_script/posh_ps_clearing_windows_console_history.yml`

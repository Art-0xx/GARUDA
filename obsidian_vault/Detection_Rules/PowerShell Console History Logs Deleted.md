---
type: detection_rule
title: "PowerShell Console History Logs Deleted"
rule_id: ff301988-c231-4bd0-834c-ac9d73b86586
platform: windows
level: medium
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1070]
---

# PowerShell Console History Logs Deleted

## Description
Detects the deletion of the PowerShell console History logs which may indicate an attempt to destroy forensic evidence

## Log Source
```yaml
category: file_delete
product: windows
```

## Detection Logic
```yaml
condition: selection
selection:
  TargetFilename|endswith: \PSReadLine\ConsoleHost_history.txt
```

## MITRE ATT&CK
- T1070

## False Positives
- Unknown

## References
- Internal Research

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2023-02-15
- **Rule ID:** `ff301988-c231-4bd0-834c-ac9d73b86586`
- **Source file:** `windows/file/file_delete/file_delete_win_delete_powershell_command_history.yml`

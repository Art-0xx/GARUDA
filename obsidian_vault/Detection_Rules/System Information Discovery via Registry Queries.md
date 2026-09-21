---
type: detection_rule
title: "System Information Discovery via Registry Queries"
rule_id: 0022869c-49f7-4ff2-ba03-85ac42ddac58
platform: windows
level: low
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1082]
---

# System Information Discovery via Registry Queries

## Description
Detects attempts to query system information directly from the Windows Registry.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: 1 of selection_cmd_* and selection_keys
selection_cmd_powershell:
  CommandLine|contains:
  - Get-ItemPropertyValue
  - gpv
  Image|endswith:
  - \powershell.exe
  - \pwsh.exe
selection_cmd_reg:
  CommandLine|contains: query
  CommandLine|contains|windash: -v
  Image|endswith: \reg.exe
selection_keys:
  CommandLine|contains:
  - \SOFTWARE\Microsoft\Windows Defender
  - \SOFTWARE\Microsoft\Windows NT\CurrentVersion
  - \SOFTWARE\Microsoft\Windows\CurrentVersion\Uninstall
  - \SYSTEM\CurrentControlSet\Control\TimeZoneInformation
  - \SYSTEM\CurrentControlSet\Services
```

## MITRE ATT&CK
- T1082

## False Positives
- Unlikely

## References
- https://cert.gov.ua/article/6277849
- https://github.com/redcanaryco/atomic-red-team/blob/75fa21076dcefa348a7521403cdd6bfc4e88623c/atomics/T1082/T1082.md
- https://github.com/redcanaryco/atomic-red-team/blob/75fa21076dcefa348a7521403cdd6bfc4e88623c/atomics/T1124/T1124.md

## Metadata
- **Author:** lazarg
- **Date:** 2025-06-12
- **Rule ID:** `0022869c-49f7-4ff2-ba03-85ac42ddac58`
- **Source file:** `windows/process_creation/proc_creation_win_discovery_via_reg_queries.yml`

---
type: detection_rule
title: "Security Event Logging Disabled via MiniNt Registry Key - Process"
rule_id: 1a4bd6af-99ac-4466-b5b2-7b72b4a05462
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.001, attack.t1112]
---

# Security Event Logging Disabled via MiniNt Registry Key - Process

## Description
Detects attempts to disable security event logging by adding the `MiniNt` registry key.
This key is used to disable the Windows Event Log service, which collects and stores event logs from the operating system and applications.
Adversaries may want to disable this service to prevent logging of security events that could be used to detect their activities.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_reg_* or all of selection_powershell_*
selection_powershell_cmd1:
  CommandLine|contains:
  - 'New-Item '
  - 'ni '
selection_powershell_cmd2:
  CommandLine|contains: \SYSTEM\CurrentControlSet\Control\MiniNt
selection_powershell_img:
- Image|endswith:
  - \powershell.exe
  - \pwsh.exe
  - \powershell_ise.exe
- OriginalFileName:
  - PowerShell.EXE
  - pwsh.dll
selection_reg_cmd:
  CommandLine|contains|all:
  - ' add '
  - \SYSTEM\CurrentControlSet\Control\MiniNt
selection_reg_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
```

## MITRE ATT&CK
- T1685.001
- T1112

## False Positives
- Highly Unlikely

## References
- https://www.hackingarticles.in/defense-evasion-windows-event-logging-t1562-002/

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-04-09
- **Rule ID:** `1a4bd6af-99ac-4466-b5b2-7b72b4a05462`
- **Source file:** `windows/process_creation/proc_creation_win_event_logging_disable_via_key_minint.yml`

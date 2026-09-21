---
type: detection_rule
title: "Windows EventLog Autologger Session Registry Modification Via CommandLine"
rule_id: d7b81144-b866-48a4-9bcc-275dc69d870e
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.001]
---

# Windows EventLog Autologger Session Registry Modification Via CommandLine

## Description
Detects attempts to disable Windows EventLog autologger sessions via registry modification.
The AutoLogger event tracing session records events that occur early in the operating system boot process.
Applications and device drivers can use the AutoLogger session to capture traces before the user logs in.
Adversaries may disable these sessions to evade detection and prevent security monitoring of early boot activities and system events.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_*
selection_cli_action:
  CommandLine|contains:
  - 'add '
  - Set-ItemProperty
  - New-ItemProperty
  - 'si '
selection_cli_base:
  CommandLine|contains: \Control\WMI\Autologger\
selection_cli_key:
  CommandLine|contains:
  - Start
  - Enabled
selection_img:
- Image|endswith:
  - \reg.exe
  - \powershell.exe
  - \pwsh.exe
- OriginalFileName:
  - reg.exe
  - PowerShell.EXE
  - pwsh.dll
```

## MITRE ATT&CK
- T1685.001

## False Positives
- Unknown

## References
- https://learn.microsoft.com/en-us/windows/win32/etw/configuring-and-starting-an-autologger-session
- https://ptylu.github.io/content/report/report.html?report=25
- https://blog.palantir.com/tampering-with-windows-event-tracing-background-offense-and-defense-4be7ac62ac63

## Metadata
- **Author:** Swachchhanda Shrawan Poudel (Nextron Systems)
- **Date:** 2025-12-25
- **Rule ID:** `d7b81144-b866-48a4-9bcc-275dc69d870e`
- **Source file:** `windows/process_creation/proc_creation_win_autologger_session_registry_modification.yml`

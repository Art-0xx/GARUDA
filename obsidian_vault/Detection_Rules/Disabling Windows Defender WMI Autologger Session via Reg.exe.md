---
type: detection_rule
title: "Disabling Windows Defender WMI Autologger Session via Reg.exe"
rule_id: a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6
platform: windows
level: high
status: experimental
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685]
---

# Disabling Windows Defender WMI Autologger Session via Reg.exe

## Description
Detects the use of reg.exe to disable the Event Tracing for Windows (ETW) Autologger session for Windows Defender API and Audit events.
By setting the 'Start' value to '0' for the 'DefenderApiLogger' or 'DefenderAuditLogger' session, an attacker can prevent these critical security events
from being logged, effectively blinding monitoring tools that rely on this data. This is a powerful defense evasion technique.

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_enable:
  CommandLine|contains: '0x00000001'
selection_img:
- Image|endswith: \reg.exe
- OriginalFileName: reg.exe
selection_reg_add:
  CommandLine|contains|all:
  - add
  - '0'
selection_reg_path:
  CommandLine|contains:
  - \Control\WMI\Autologger\DefenderApiLogger\Start
  - \Control\WMI\Autologger\DefenderAuditLogger\Start
```

## MITRE ATT&CK
- T1685

## False Positives
- Highly unlikely

## References
- https://research.splunk.com/endpoint/76406a0f-f5e0-4167-8e1f-337fdc0f1b0c/
- https://docs.microsoft.com/en-us/windows/win32/etw/configuring-and-starting-an-autologger-session
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://blog.malwarebytes.com/malwarebytes-news/2021/02/lazyscripter-from-empire-to-double-rat/
- https://www.binarly.io/blog/design-issues-of-modern-edrs-bypassing-etw-based-solutions

## Metadata
- **Author:** Matt Anderson (Huntress)
- **Date:** 2025-07-09
- **Rule ID:** `a1b2c3d4-e5f6-a7b8-c9d0-e1f2a3b4c5d6`
- **Source file:** `windows/process_creation/proc_creation_win_reg_disable_defender_wmi_autologger.yml`

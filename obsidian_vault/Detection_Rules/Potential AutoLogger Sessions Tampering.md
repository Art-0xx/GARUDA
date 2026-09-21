---
type: detection_rule
title: "Potential AutoLogger Sessions Tampering"
rule_id: f37b4bce-49d0-4087-9f5b-58bffda77316
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1685.001]
---

# Potential AutoLogger Sessions Tampering

## Description
Detects tampering with autologger trace sessions which is a technique used by attackers to disable logging.
The AutoLogger event tracing session records events up that occur early in the operating system boot process.
Applications and device drivers can use the AutoLogger session to capture traces before the user logs in, and also used by security solutions as telemetry source.
Adversaries may disable these sessions to evade detection and prevent security monitoring of early boot activities and system events.

## Log Source
```yaml
category: registry_set
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_main_*
filter_main_defender:
  Image|endswith: \MsMpEng.exe
  Image|startswith:
  - C:\ProgramData\Microsoft\Windows Defender\Platform\
  - C:\Program Files\Windows Defender\
  - C:\Program Files (x86)\Windows Defender\
  TargetObject|contains:
  - \DefenderApiLogger\
  - \DefenderAuditLogger\
filter_main_wevtutil:
  Image: C:\Windows\system32\wevtutil.exe
selection_main:
  TargetObject|contains: \Control\WMI\Autologger\
selection_values:
  Details: DWORD (0x00000000)
  TargetObject|contains:
  - \EventLog-
  - \Defender
  TargetObject|endswith:
  - \Enabled
  - \Start
```

## MITRE ATT&CK
- T1685.001

## False Positives
- Unknown

## References
- https://twitter.com/MichalKoczwara/status/1553634816016498688
- https://thedfirreport.com/2021/10/18/icedid-to-xinglocker-ransomware-in-24-hours/
- https://i.blackhat.com/EU-21/Wednesday/EU-21-Teodorescu-Veni-No-Vidi-No-Vici-Attacks-On-ETW-Blind-EDRs.pdf
- https://learn.microsoft.com/en-us/windows/win32/etw/configuring-and-starting-an-autologger-session
- https://blog.palantir.com/tampering-with-windows-event-tracing-background-offense-and-defense-4be7ac62ac63

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-08-01
- **Rule ID:** `f37b4bce-49d0-4087-9f5b-58bffda77316`
- **Source file:** `windows/registry/registry_set/registry_set_disable_autologger_sessions.yml`

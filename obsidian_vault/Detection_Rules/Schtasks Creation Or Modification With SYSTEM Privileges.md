---
type: detection_rule
title: "Schtasks Creation Or Modification With SYSTEM Privileges"
rule_id: 89ca78fd-b37c-4310-b3d3-81a023f83936
platform: windows
level: high
status: test
tags: [detection, sigma, windows]
mitre_tags: [attack.t1053.005]
---

# Schtasks Creation Or Modification With SYSTEM Privileges

## Description
Detects the creation or update of a scheduled task to run with "NT AUTHORITY\SYSTEM" privileges

## Log Source
```yaml
category: process_creation
product: windows
```

## Detection Logic
```yaml
condition: all of selection_* and not 1 of filter_optional_*
filter_optional_avira:
  CommandLine|contains:
  - '/Create /F /RU System /SC WEEKLY /TN AviraSystemSpeedupVerify /TR '
  - :\Program Files (x86)\Avira\System Speedup\setup\avira_speedup_setup.exe
  - /VERIFY /VERYSILENT /NOSTART /NODOTNET /NORESTART" /RL HIGHEST
filter_optional_office:
  CommandLine|contains|all:
  - Subscription Heartbeat
  - \HeartbeatConfig.xml
  - \Microsoft Shared\OFFICE
filter_optional_teamviewer:
  CommandLine|contains|all:
  - /TN TVInstallRestore
  - \TeamViewer_.exe
  Image|endswith: \schtasks.exe
selection_root:
  CommandLine|contains:
  - ' /change '
  - ' /create '
  Image|endswith: \schtasks.exe
selection_run:
  CommandLine|contains: '/ru '
selection_user:
  CommandLine|contains:
  - NT AUT
  - ' SYSTEM '
```

## MITRE ATT&CK
- T1053.005

## False Positives
- Unknown

## References
- https://www.elastic.co/security-labs/exploring-the-qbot-attack-pattern
- https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/schtasks

## Metadata
- **Author:** Nasreddine Bencherchali (Nextron Systems)
- **Date:** 2022-07-28
- **Rule ID:** `89ca78fd-b37c-4310-b3d3-81a023f83936`
- **Source file:** `windows/process_creation/proc_creation_win_schtasks_system.yml`
